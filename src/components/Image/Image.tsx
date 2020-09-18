import React from "react";
import { Images } from "../../constants";
import "./Image.scss";

type ImageProps = {
  source: any;
  altText: string;
  fallbackImage?: any;
};

const defaultProps: ImageProps = {
  source: "",
  altText: "",
  fallbackImage: Images.IMAGE_UNAVAILABLE
};

const Image: React.FC<ImageProps> = ({
  source,
  altText,
  fallbackImage
}: ImageProps) => {
  const addDefaultSrc = (event: any) => {
    event.target.src = fallbackImage;
  };
  return (
    <img className="image" src={source} alt={altText} onError={addDefaultSrc} />
  );
};

Image.defaultProps = defaultProps;

export default React.memo(Image);
