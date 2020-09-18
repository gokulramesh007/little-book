import { Strings } from "../../constants";

export const fetchBlogs = (blogs: any, selectedBlog: any) => {
  return {
    type: Strings.APPLICATION.REDUX.TYPES.FETCH_BLOGS,
    payload: {
      blogs: blogs,
      selectedBlog: selectedBlog
    }
  };
};

export const selectBlog = (blog: any) => {
  return {
    type: Strings.APPLICATION.REDUX.TYPES.SELECT_BLOG,
    payload: blog
  };
};

export const updateFilter = (filter: any) => {
  return {
    type: Strings.APPLICATION.REDUX.TYPES.UPDATE_FILTERS,
    payload: filter
  };
};

export const setInitialFilters = (filters: any) => {
  return {
    type: Strings.APPLICATION.REDUX.TYPES.SET_INITIAL_FILTERS,
    payload: filters
  };
};

export const editBlog = (isEditable: any) => {
  return {
    type: Strings.APPLICATION.REDUX.TYPES.EDIT_BLOG,
    payload: isEditable
  };
};

export const addBlog = (blogs: any, selectedBlog: any) => {
  return {
    type: Strings.APPLICATION.REDUX.TYPES.ADD_BLOG,
    payload: {
      blogs: blogs,
      selectedBlog: selectedBlog
    }
  };
};

export const updateBlogs = (blogs: any) => {
  return {
    type: Strings.APPLICATION.REDUX.TYPES.UPDATE_BLOGS,
    payload: blogs
  };
};
