import { Strings } from "../../constants";
import ActionInterface from "../modal/ActionInterface";

interface OverlayInterface {
  showOverlay: any;
}

const initialState: OverlayInterface = {
  showOverlay: {
    users: false,
    newBlog: false
  }
};

const overlayReducer = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case Strings.APPLICATION.REDUX.TYPES.TOGGLE_OVERLAY:
      return {
        ...state,
        showOverlay: action.payload
      };
    default:
      return state;
  }
};

export default overlayReducer;
