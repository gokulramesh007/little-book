import { Strings } from "../../constants";

export const toggleOverlay = (overlay: any) => {
  return {
    type: Strings.APPLICATION.REDUX.TYPES.TOGGLE_OVERLAY,
    payload: overlay
  };
};
