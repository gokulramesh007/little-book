import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBlog } from "../../../redux";
import { BlogCard } from "../../../components";
import "./BlogList.scss";

interface BlogListInterface {
  data: Array<any>;
  column?: string;
  theme?: string;
}

const defaultProps: BlogListInterface = {
  data: [],
  column: "one",
  theme: "light"
};

const BlogList: React.FC<BlogListInterface> = ({
  theme,
  column,
  data
}: BlogListInterface) => {
  const selectedBlog = useSelector((state: any) => state.blog.selectedBlog);
  const dispatch = useDispatch();

  if (selectedBlog && !selectedBlog.title && data.length > 0) {
    dispatch(selectBlog(data[0]));
  }
  const _renderBlogTiles = () => {
    let blogList: Array<any> = [];
    if (data.length === 0) {
      blogList.push(
        <div className={`no-blogs-wrapper ${theme}`} key={0}>
          No blogs to display!
        </div>
      );
    } else {
      data.forEach(item => {
        blogList.push(
          <div className={`tiles ${theme}`} key={item.title}>
            <BlogCard data={item} theme={theme} />
          </div>
        );
      });
    }
    return blogList;
  };

  return (
    <div className={`blog-list-wrapper ${column}`}>
      {_renderBlogTiles()}
    </div>
  );
};

BlogList.defaultProps = defaultProps;

export default React.memo(BlogList);
