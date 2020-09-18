import React from "react";
import "./Button.scss";

interface ButtonInterface {
  text?: string;
  size?: string;
  color?: string;
  disabled?: boolean;
  onClick: any;
}

const defaultProps: ButtonInterface = {
  text: "Submit",
  size: "custom",
  color: "pink",
  onClick: () => console.log("Button clicked!")
};

const Button: React.FC<ButtonInterface> = ({
  text,
  size,
  color,
  disabled,
  onClick
}: ButtonInterface) => {
  return (
    <button
      className={`button ${size} ${color}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default React.memo(Button);
