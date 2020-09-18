import { Strings } from "../../constants";
import ActionInterface from "../modal/ActionInterface";

interface BlogInterface {
  selectedBlog: any;
  initialFilters: any;
  blogs: any;
  filter: any;
  isEditable: any;
}

const initialState: BlogInterface = {
  selectedBlog: {},
  initialFilters: [],
  blogs: {
    initialData: [],
    filteredData: []
  },
  filter: {
    searchKey: "",
    filters: []
  },
  isEditable: false
};

const blogReducer = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case Strings.APPLICATION.REDUX.TYPES.FETCH_BLOGS:
      return {
        ...state,
        blogs: action.payload.blogs,
        selectedBlog: action.payload.selectedBlog
      };
    case Strings.APPLICATION.REDUX.TYPES.SELECT_BLOG:
      return {
        ...state,
        selectedBlog: action.payload
      };
    case Strings.APPLICATION.REDUX.TYPES.UPDATE_FILTERS:
      return {
        ...state,
        filter: action.payload
      };
    case Strings.APPLICATION.REDUX.TYPES.SET_INITIAL_FILTERS:
      return {
        ...state,
        initialFilters: action.payload
      };
    case Strings.APPLICATION.REDUX.TYPES.EDIT_BLOG:
      return {
        ...state,
        isEditable: action.payload
      };
    case Strings.APPLICATION.REDUX.TYPES.ADD_BLOG:
      return {
        ...state,
        blogs: action.payload.blogs,
        selectedBlog: action.payload.selectedBlog
      };
    case Strings.APPLICATION.REDUX.TYPES.UPDATE_BLOGS:
      return {
        ...state,
        blogs: action.payload
      };
    default:
      return state;
  }
};

export default blogReducer;
