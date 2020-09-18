import { Strings } from "../../constants";
import ActionInterface from "../modal/ActionInterface";

interface UserInterface {
  users: any;
}

const initialState: UserInterface = {
  users: []
};

const userReducer = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
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
