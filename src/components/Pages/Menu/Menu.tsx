import React, { lazy, Suspense, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBlogs,
  fetchUsers,
  toggleOverlay,
  updateFilter
} from "../../../redux";
import { Container, Filter, Loader } from "../../../components";
import "./Menu.scss";

interface MenuInterface {
  theme: string;
  changeTheme: any;
}

const defaultProps: MenuInterface = {
  theme: "light",
  changeTheme: () => console.log("changeTheme clicked")
};

const Users = lazy(() => import("../Users/Users"));

const Menu: React.FC<MenuInterface> = ({
  theme,
  changeTheme
}: MenuInterface) => {
  const containerTheme = theme === "light" ? "light-primary" : "dark-primary";
  const state = useSelector((state: any) => state);
  const overlay = state.overlay.showOverlay;
  const blogState = state.blog;
  const initialFilters = blogState.initialFilters;
  const blogs = blogState.blogs;
  const filter = blogState.filter;

  const dispatch = useDispatch();
  const loader = useRef<HTMLDivElement>(null);

  const handleTheme = () => {
    changeTheme();
  };

  const handleFilter = (filters: Array<any>) => {
    if (loader.current) loader.current.classList.remove("hide");
    let filteredBlogs = [];
    let blogList = [];

    blogList = filter.searchKey === "" ? blogs.initialData : blogs.filteredData;

    if (filters.length > 0) {
      filteredBlogs = blogList.filter((blog: any) => {
        return filters.includes(blog.type);
      });
    } else {
      filteredBlogs = [];
    }

    let selectedBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : {};
    dispatch(
      updateFilter({
        ...filter,
        filters: filters
      })
    );

    dispatch(
      fetchBlogs(
        {
          ...blogs,
          filteredData: filteredBlogs
        },
        selectedBlog
      )
    );
    if (loader.current) loader.current.classList.add("hide");
  };

  const viewUsers = () => {
    dispatch(toggleOverlay({ ...overlay, users: !overlay.users }));
    dispatch(fetchUsers());
  };

  return (
    <div className="menu-wrapper">
      <Container theme={containerTheme}>
        <div className="menu-contents">
          <div className={`logo ${theme}`}>
            <span>Little</span>
            <span>Book</span>
          </div>
          <Filter
            data={initialFilters}
            theme={theme}
            filter={filter.filters}
            handleFilter={handleFilter}
          />
          <div className={`action-wrapper ${theme}`}>
            <div className="action" onClick={viewUsers}>
              View Members
            </div>
            <div className="action" onClick={handleTheme}>
              Switch to Dark Mode
            </div>
          </div>
        </div>
      </Container>
      <Suspense fallback={<Loader />}>
        {overlay.users && Users ? <Users theme={theme} /> : null}
      </Suspense>
      <div ref={loader} className="loader-container hide">
        <Loader />
      </div>
    </div>
  );
};

Menu.defaultProps = defaultProps;

export default React.memo(Menu);
