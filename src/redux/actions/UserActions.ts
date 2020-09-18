import { Strings } from "../../constants";

export const fetchUsers = (users: any) => {
  return {
    type: Strings.APPLICATION.REDUX.TYPES.FETCH_USERS,
    payload: users
  };
};