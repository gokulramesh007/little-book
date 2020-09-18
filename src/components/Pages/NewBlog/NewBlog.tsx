import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setInitialFilters,
  toggleOverlay,
  updateBlogs,
  updateFilter
} from "../../../redux";
import { Button, Overlay } from "../../../components";
import "./NewBlog.scss";

const NewBlog = ({ theme }: any) => {
  const blogState = useSelector((state: any) => state.blog);
  const blogs = blogState.blogs;
  const initialFilters = blogState.initialFilters;
  const filter = blogState.filter;
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleOverlayClick = () => {
    dispatch(toggleOverlay({ users: false, newBlog: false }));
  };

  const addBlog = () => {
    if (title !== "" && details !== "") {
      dispatch(
        updateBlogs({
          ...blogs,
          initialData: [
            ...blogs.initialData,
            { title: title, details: details, type: "Local" }
          ],
          filteredData: [
            ...blogs.filteredData,
            { title: title, details: details, type: "Local" }
          ]
        })
      );
      if (!filter.filters.includes("Local")) {
        dispatch(
          updateFilter({ ...filter, filters: [...filter.filters, "Local"] })
        );
        dispatch(setInitialFilters([...initialFilters, "Local"]));
      }
      dispatch(toggleOverlay({ users: false, newBlog: false }));
    } else {
      alert("Add title and details for the blog!");
    }
  };

  const handleTitleChange = (event: any) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const handleDetailsChange = (event: any) => {
    console.log(event.target.value);
    setDetails(event.target.value);
  };

  return (
    <Overlay theme={theme} closeOverlay={handleOverlayClick}>
      <div className="new-blog-wrapper">
        <div className="title">Add New Blog</div>
        <div className="details">
          <div className="content">
            <input
              className={`title ${theme}`}
              type="text"
              placeholder="Add Title"
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              className={`description ${theme}`}
              placeholder="Add Details"
              rows={25}
              value={details}
              onChange={handleDetailsChange}
            />
          </div>
          <Button text="ADD" onClick={addBlog} size="custom" />
        </div>
      </div>
    </Overlay>
  );
};

export default React.memo(NewBlog);
