import { combineReducers } from "redux";
import blogReducer from "./reducers/BlogReducer";
import userReducer from "./reducers/UserReducer";
import overlayReducer from "./reducers/OverlayReducer";

const rootReducer = combineReducers({
  blog: blogReducer,
  user: userReducer,
  overlay: overlayReducer
});

export default rootReducer;
