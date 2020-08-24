import React from "react";
import { Images } from "../../constants";
import PropTypes from "prop-types";
import { image } from "./Image.module.scss";

const Image = ({ source, altText, fallbackImage }) => {
  const addDefaultSrc = event => {
    event.target.src = fallbackImage || Images.ERROR;
  };
  return (
    <img className={image} src={source} alt={altText} onError={addDefaultSrc} />
  );
}

Image.defaultProps = {
  source: "",
  altText: "",
  fallbackImage: ""
};

Image.propTypes = {
  source: PropTypes.string,
  altText: PropTypes.string,
  fallbackImage: PropTypes.string
};

export default React.memo(Image);
