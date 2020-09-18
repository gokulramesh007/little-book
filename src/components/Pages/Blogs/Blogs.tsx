import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BlogList,
  Button,
  Container,
  Loader,
  SearchInput
} from "../../../components";
import { fetchBlogs, updateFilter, setInitialFilters } from "../../../redux";
import { blogService } from "../../../services";
import "./Blogs.scss";

interface BlogInterface {
  theme: string;
  addBlog: any;
}

const Blogs: React.FC<BlogInterface> = ({ theme, addBlog }: BlogInterface) => {
  const containerTheme =
    theme === "light" ? "light-secondary" : "dark-secondary";

  const blogState = useSelector((state: any) => state.blog);
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

    blogList =
      filter.filters.length > 0 ? blogs.filteredData : blogs.initialData;

    let searchResults = blogList.filter((blog: any) => {
      let title = blog.title.toUpperCase();
      return title.includes(value.toUpperCase());
    });

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

  useEffect(() => {
    _fetchBlogs();
  }, []);

  return (
    <div className="blogs-wrapper">
      <Container theme={containerTheme}>
        <div className="search-section">
          <SearchInput theme={theme} onSearch={handleSearch} />
          <Button text="NEW" size="custom" onClick={addBlog} />
        </div>
        <BlogList data={blogs.filteredData} theme={theme} />
      </Container>
      <div ref={loader} className="loader-container hide">
        <Loader />
      </div>
    </div>
  );
};

export default React.memo(Blogs);
