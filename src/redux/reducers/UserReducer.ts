import { Strings } from "../../constants";
import ActionInterface from "../modal/ActionInterface";

interface UserInterface {
  users: any;
  error: any;
}

const initialState: UserInterface = {
  users: [],
  error: ""
};

const userReducer = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case Strings.APPLICATION.REDUX.TYPES.FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
        error: ""
      };
    case Strings.APPLICATION.REDUX.TYPES.FETCH_USERS_ERROR:
      return {
        users: [],
        error: action.payload
      };
    case Strings.APPLICATION.REDUX.TYPES.FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
