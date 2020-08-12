import { decorate, observable } from "mobx";
import instance from "./instance";

class MugStore {
  mugs = [];
  loading = true;

  fetchMugs = async () => {
    try {
      const res = await instance.get("http://localhost:8000/mugs");
      this.mugs = res.data;
      this.loading = false;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  getMugById = (mugId) => this.mugs.find((mug) => mug.id === mugId);

  createMug = async (newMug, vendor) => {
    try {
      const formData = new FormData();
      for (const key in newMug) formData.append(key, newMug[key]);
      const res = await instance.post(`/vendors/${vendor.id}}mugs`, formData);
      const mug = res.data;
      this.mugs.push(mug);
      vendor.mugs.push(mug);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  updateMug = async (updateMug) => {
    try {
      // update in the backend
      const formData = new FormData();
      for (const key in updateMug) formData.append(key, updateMug[key]);
      await instance.put(`/mugs/${updateMug.id}`, formData);

      // update in the frontend
      const mug = this.mugs.find((mug) => mug.id === +updateMug.id);
      for (const key in formData) mug[key] = formData[key];
    } catch (error) {
      console.error("Error:", error);
    }
  };

  deleteCollection = async (mugID) => {
    try {
      await instance.delete(`/mugs/${mugID}`);
      this.mugs = this.mugs.filter((mug) => mug.id !== mugID);
    } catch (error) {
      console.error("Error:", error);
    }
  };
}

decorate(MugStore, { mugs: observable, loading: observable });

const mugStore = new MugStore();
mugStore.fetchMugs();

export default mugStore;
