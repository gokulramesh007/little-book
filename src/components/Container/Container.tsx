import React, { Children } from "react";
import "./Container.scss";

interface ContainerInterface {
  theme?: string;
  size?: string;
  padding?: string;
  children?: any;
}

const defaultProps: ContainerInterface = {
  theme: "light-primary",
  size: "large",
  padding: "tinyPadding"
};

const Container: React.FC<ContainerInterface> = ({
  theme,
  size,
  padding,
  children
}: ContainerInterface) => {
  return (
    <div className={`littleBooksContainer ${theme} ${size} ${padding}`}>
      {children}
    </div>
  );
};

Container.defaultProps = defaultProps;

export default React.memo(Container);
