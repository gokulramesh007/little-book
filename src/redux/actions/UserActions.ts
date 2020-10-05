import { Strings } from "../../constants";
import { userService } from "../../services";

const fetchUserSuccess = (users: any) => {
  return {
    type: Strings.APPLICATION.REDUX.TYPES.FETCH_USERS_SUCCESS,
    payload: users
  };
};

const fetchUserError = (error: any) => {
  return {
    type: Strings.APPLICATION.REDUX.TYPES.FETCH_USERS_ERROR,
    payload: error
  };
};

export const fetchUsers = () => {
  return (dispatch: any) => {
    userService
      .getUsers()
      .then(response => {
        dispatch(fetchUserSuccess(response));
      })
      .catch(error => {
        dispatch(fetchUserError(error));
      });
  };
};
