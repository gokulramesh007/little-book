import { appAxios } from "../utils";
import { Strings } from "../constants";

export default class userService {
  static getUsers = async () => {
    try {
      const response = await appAxios.get(
        Strings.APPLICATION.END_POINTS.USERS,
        {}
      );
      return response.data;
    } catch (error) {
      console.log("Error - userService -> getUsers : ", error);
    }
  };
}
