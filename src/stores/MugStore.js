import { decorate, observable } from "mobx";

//Data
import mugs from "../mugs";

class MugStore {
  mugs = mugs;

  deleteCollection = (mugID) => {
    this.mugs = this.mugs.filter((mug) => mug.id !== mugID);
  };
}

decorate(MugStore, { mugs: observable });

const mugStore = new MugStore();

export default mugStore;
