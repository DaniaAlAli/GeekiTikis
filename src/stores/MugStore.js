import { decorate, observable } from "mobx";
import axios from "axios";

class MugStore {
  mugs = [];
  loading = true;

  fetchMugs = async () => {
    try {
      const res = await axios.get("http://localhost:8000/mugs");
      this.mugs = res.data;
      this.loading = false;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  createMug = async (newMug) => {
    try {
      const formData = new FormData();
      for (const key in newMug) formData.append(key, newMug[key]);
      const res = await axios.post(
        `http://localhost:8000/vendors/${newMug.vendorId}}mugs`,
        formData
      );
      this.mugs.push(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  updateMug = async (updateMug) => {
    try {
      // update in the backend
      const formData = new FormData();
      for (const key in updateMug) formData.append(key, updateMug[key]);
      await axios.put(`http://localhost:8000/mugs/${updateMug.id}`, formData);

      // update in the frontend
      const mug = this.mugs.find((mug) => mug.id === +updateMug.id);
      for (const key in formData) mug[key] = formData[key];
    } catch (error) {
      console.error("Error:", error);
    }
  };

  deleteCollection = async (mugID) => {
    try {
      await axios.delete(`http://localhost:8000/mugs/${mugID}`);
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
