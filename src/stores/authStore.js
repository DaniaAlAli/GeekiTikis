import { decorate, observable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
    } catch (error) {
      console.log("AuthStore > signup > Error", error);
    }
  };

  sigin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.user = decode(res.data.token);
    } catch (error) {
      console.log("AuthStore > signin > Error", error);
    }
  };
}

decorate(AuthStore, { user: observable });
const authStore = new AuthStore();

export default authStore;
