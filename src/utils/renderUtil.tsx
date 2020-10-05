import Store from "../redux/store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import React from "react";

const renderUtil = (
  component: any,
  {
    initialState = {
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
    },
    store = Store
  } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        {" "}{component}{" "}
      </Provider>
    )
  };
};

export default renderUtil;
