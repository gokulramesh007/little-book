import { appAxios } from "../utils";
import { Strings } from "../constants";

export default class blogService {
  static getBlogs = async () => {
    try {
      const response = await appAxios.get(
        "/v3/70158472-5e35-487a-af68-aa9e78bf3e94",
        //Strings.APPLICATION.END_POINTS.BLOGS,
        {}
      );
      return response.data;
    } catch (error) {
      console.log("Error - blogService -> getBlogs : ", error);
    }
  };
}
