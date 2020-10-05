import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BlogList,
  Button,
  Container,
  Loader,
  NewBlog,
  SearchInput
} from "../../../components";
import {
  fetchBlogs,
  updateFilter,
  setInitialFilters,
  toggleOverlay
} from "../../../redux";
import { blogService } from "../../../services";
import "./Blogs.scss";

interface BlogInterface {
  theme: string;
}

const Blogs: React.FC<BlogInterface> = ({ theme }: BlogInterface) => {
  const containerTheme =
    theme === "light" ? "light-secondary" : "dark-secondary";

  const state = useSelector((state: any) => state);
  const overlay = state.overlay.showOverlay;
  const blogState = state.blog;
  const blogs = blogState.blogs;
  const filter = blogState.filter;
  const dispatch = useDispatch();
  const loader = useRef<HTMLDivElement>(null);

  const _fetchBlogs = () => {
    if (loader.current) loader.current.classList.remove("hide");
    blogService
      .getBlogs()
      .then((response: any) => {
        let selectedBlog = response.length > 0 ? response[0] : {};
        dispatch(
          fetchBlogs(
            {
              initialData: response,
              filteredData: response
            },
            selectedBlog
          )
        );
        fetchFilters(response);
        if (loader.current) loader.current.classList.add("hide");
      })
      .catch(error => {
        console.log(error);
        //loader.current.classList.add("hide");
      });
  };

  const fetchFilters = (data: any) => {
    let filters = filter.filters;
    data.forEach((item: any) => {
      if (!filters.includes(item.type)) {
        filters.push(item.type);
      }
    });
    dispatch(setInitialFilters(filters));
  };

  const handleSearch = (value: string) => {
    let blogList = [];
    let searchResults = [];
    let filters = filter.filters;
    blogList = filters.length > 0 ? blogs.filteredData : blogs.initialData;
    if (value === "") {
      searchResults = blogs.initialData.filter((blog: any) => {
        return filters.includes(blog.type);
      });
    } else {
      searchResults = blogList.filter((blog: any) => {
        let title = blog.title.toUpperCase();
        return title.includes(value.toUpperCase());
      });
    }

    let selectedBlog = searchResults.length > 0 ? searchResults[0] : {};

    dispatch(
      updateFilter({
        ...filter,
        searchKey: value
      })
    );

    dispatch(
      fetchBlogs(
        {
          ...blogs,
          filteredData: searchResults
        },
        selectedBlog
      )
    );
  };

  const addBlog = () => {
    dispatch(toggleOverlay({ ...overlay, newBlog: !overlay.newBlog }));
  };

  useEffect(() => {
    _fetchBlogs();
  }, []);

  return (
    <div data-testid="blogs" className="blogs-wrapper">
      <Container theme={containerTheme}>
        <div className="search-section">
          <SearchInput theme={theme} onSearch={handleSearch} />
          <Button text="NEW" size="custom" onClick={addBlog} />
        </div>
        <BlogList data={blogs.filteredData} theme={theme} />
      </Container>
      {overlay.newBlog ? <NewBlog theme={theme} /> : null}
      <div ref={loader} className="loader-container hide">
        <Loader />
      </div>
    </div>
  );
};

export default React.memo(Blogs);
