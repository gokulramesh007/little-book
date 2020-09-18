const strings = {
  APPLICATION: {
    ROOT_URL: "https://jsonmockserver.vercel.app/",
    END_POINTS: {
      BLOGS: "/api/blogs",
      USERS: "/api/users"
    },
    ROUTES: {
      HOME: "/",
      ALL: "*"
    },
    REDUX: {
      TYPES: {
        FETCH_BLOGS: "FETCH_BLOGS",
        SELECT_BLOG: "SELECT_BLOG",
        ADD_BLOG: "ADD_BLOG",
        EDIT_BLOG: "EDIT_BLOG",
        UPDATE_BLOGS: "UPDATE_BLOGS",
        UPDATE_FILTERS: "UPDATE_FILTERS",
        FETCH_USERS: "FETCH_USERS",
        SET_INITIAL_FILTERS: "SET_INITIAL_FILTERS",
        TOGGLE_OVERLAY: "TOGGLE_OVERLAY"
      }
    }
  }
};

export default strings;
