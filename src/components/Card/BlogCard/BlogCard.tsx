import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { editBlog, selectBlog } from "../../../redux";
import "./BlogCard.scss";

interface BlogCardInterface {
  theme?: string;
  data: any;
}

const defaultProps: BlogCardInterface = {
  theme: "light",
  data: {}
};

const BlogCard: React.FC<BlogCardInterface> = ({
  theme,
  data
}: BlogCardInterface) => {
  const blogState = useSelector((state: any) => state.blog);
  const selectedBlog = blogState.selectedBlog;
  const isEditable = blogState.isEditable;
  const dispatch = useDispatch();
  const selected = data.title === selectedBlog.title ? "selected" : "";

  const handleClick = () => {
    if (isEditable) {
      console.log("if");
      let options: any = {
        title: "Warning",
        message: "All unsaved chnages will be lost! Would you like to proceed?",
        buttons: [
          {
            label: "Yes",
            onClick: () => {
              dispatch(editBlog(!isEditable));
              dispatch(selectBlog(data));
            }
          },
          {
            label: "No"
          }
        ]
      };
      confirmAlert(options);
    } else {
      dispatch(selectBlog(data));
    }
  };

  return (
    <div
      className={`blog-card-wrapper ${theme} ${selected}`}
      onClick={handleClick}
    >
      <div className="title">
        {data.title}
      </div>
      <div className="type">
        {data.type}
      </div>
      <div className="details">
        {data.details}
      </div>
    </div>
  );
};

BlogCard.defaultProps = defaultProps;

export default React.memo(BlogCard);
