import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContentEditable from "react-contenteditable";
import { addBlog, editBlog } from "../../../redux";
import { Button, Container, Image } from "../../../components";
import { Images } from "../../../constants";
import "./Details.scss";

const Details = ({ theme }: any) => {
  const containerTheme = theme === "light" ? "light-primary" : "dark-primary";
  const blogState = useSelector((state: any) => state.blog);
  const initialData = blogState.blogs.initialData;
  const filteredData = blogState.blogs.filteredData;
  const selectedBlog = blogState.selectedBlog;
  const isEditable = blogState.isEditable;
  const dispatch = useDispatch();

  const { title, photo, details } = selectedBlog;
  var titleHtml = title;
  var detailsHtml = details;

  const editContent = () => {
    dispatch(editBlog(!isEditable));
  };

  const handleTitleChange = (event: any) => {
    titleHtml = event.target.value;
  };

  const handleDetailsChange = (event: any) => {
    detailsHtml = event.target.value;
  };

  const handleCancelAction = () => {
    dispatch(editBlog(!isEditable));
  };

  const handleSaveAction = () => {
    initialData.forEach((blog: any) => {
      if (blog.title === selectedBlog.title) {
        blog.title = titleHtml;
        blog.details = detailsHtml;
      }
    });
    filteredData.forEach((blog: any) => {
      if (blog.title === selectedBlog.title) {
        blog.title = titleHtml;
        blog.details = detailsHtml;
      }
    });
    dispatch(
      addBlog(
        {
          initialData: initialData,
          filteredData: filteredData
        },
        {
          ...selectedBlog,
          title: titleHtml,
          details: detailsHtml
        }
      )
    );
    dispatch(editBlog(!isEditable));
  };

  return (
    <div className={`details-wrapper ${theme}`}>
      <Container theme={containerTheme} padding="smallPadding">
        {title
          ? <div>
              <div className="blog-image-wrapper">
                <Image
                  source={photo}
                  altText={title}
                  fallbackImage={Images.DEFAULT_BLOG}
                />
              </div>
              <div className="title">
                <ContentEditable
                  html={titleHtml}
                  disabled={!isEditable}
                  onChange={handleTitleChange}
                />
              </div>
              <div className="description">
                <ContentEditable
                  html={detailsHtml}
                  disabled={!isEditable}
                  onChange={handleDetailsChange}
                />
              </div>
              <div className="button-wrapper">
                {isEditable
                  ? <div className="action-wrapper">
                      <Button
                        text="CANCEL"
                        size="tiny"
                        color="cyan"
                        onClick={handleCancelAction}
                      />
                      <Button
                        text="SAVE CONTENT"
                        size="tiny"
                        onClick={handleSaveAction}
                      />
                    </div>
                  : <Button
                      text="EDIT CONTENT"
                      size="tiny"
                      color="cyan"
                      onClick={editContent}
                    />}
              </div>
            </div>
          : <div className="no-details-wrapper">No Data to Display!</div>}
      </Container>
    </div>
  );
};

export default React.memo(Details);
