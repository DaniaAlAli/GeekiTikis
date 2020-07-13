import { decorate, observable } from "mobx";
import slugify from "react-slugify";

//Data
import mugs from "../mugs";

class MugStore {
  mugs = mugs;

  createMug = (newMug) => {
    newMug.id = this.mugs[this.mugs.length - 1].id + 1;
    newMug.slug = slugify(newMug.name);
    this.mugs.push(newMug);
  };

  updateMug = (updateMug) => {
    const mug = this.mugs.find((mug) => mug.id === updateMug.id);

    // mugs.name = updateMug.name;
    // mugs.price = updateMug.price;
    // mugs.description = updateMug.description;
    // mugs.image = updateMug.image;

    for (const key in updateMug) mug[key] = updateMug[key];
  };

  deleteCollection = (mugID) => {
    this.mugs = this.mugs.filter((mug) => mug.id !== mugID);
  };
}

decorate(MugStore, { mugs: observable });

const mugStore = new MugStore();

export default mugStore;
