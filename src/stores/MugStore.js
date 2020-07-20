import { decorate, observable } from "mobx";
import axios from "axios";

class MugStore {
  mugs = [];

  fetchMugs = async () => {
    try {
      const res = await axios.get("http://localhost:8000/mugs");
      this.mugs = res.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  createMug = async (newMug) => {
    try {
      const res = await axios.post("http://localhost:8000/mugs", newMug);
      this.mugs.push(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  updateMug = (updateMug) => {
    const mug = this.mugs.find((mug) => mug.id === updateMug.id);

    for (const key in updateMug) mug[key] = updateMug[key];
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

decorate(MugStore, { mugs: observable });

const mugStore = new MugStore();
mugStore.fetchMugs();

export default mugStore;
