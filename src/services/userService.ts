import { appAxios } from "../utils";
import { Strings } from "../constants";

export default class userService {
  static getUsers = async () => {
    try {
      const response = await appAxios.get(
        "/v3/7653a1b2-2e48-4324-807f-baee4c4c246b",
        //Strings.APPLICATION.END_POINTS.USERS,
        {}
      );
      return response.data;
    } catch (error) {
      console.log("Error - userService -> getUsers : ", error);
    }
  };
}
