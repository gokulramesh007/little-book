import { appAxios } from "../utils";
import { Strings } from "../constants";

export default class blogService {
  static getBlogs = async () => {
    try {
      const response = await appAxios.get(
        Strings.APPLICATION.END_POINTS.BLOGS,
        {}
      );
      return response.data;
    } catch (error) {
      console.log("Error - blogService -> getBlogs : ", error);
    }
  };
}
