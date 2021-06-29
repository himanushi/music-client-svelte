import axios from "axios";
import { cookie } from "./cookie";

const key = "jsFileVersion";

export const reset = () => {

  localStorage.removeItem("jukebox");
  window.location.reload();

};

export const currentVersion = () => cookie.get(key);

export const checkVersion = async () => {

  if (navigator.cookieEnabled) {

    const result = await axios.get(
      `${window.location.origin}/version.txt?time=${new Date().getTime()}`
    );

    if (!result.data) {

      return;

    }

    cookie.set(key, result.data);

  }

};
