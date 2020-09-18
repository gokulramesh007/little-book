import React from "react";
import { Container } from "../../components";
import "./Overlay.scss";

interface OverlayInterface {
  theme?: string;
  children?: any;
  closeOverlay: any;
}

const Overlay: React.FC<OverlayInterface> = ({
  theme,
  children,
  closeOverlay
}: OverlayInterface) => {
  const containerTheme = theme === "light" ? "light" : "dark";

  const handleClick = (event: any) => {
    if (event.target.classList.contains("overlay-wrapper")) closeOverlay();
  };

  return (
    <div className={`overlay-wrapper ${theme}`} onClick={handleClick}>
      <div className="overlay-content">
        <Container theme={containerTheme} padding="smallPadding">
          {children}
        </Container>
      </div>
    </div>
  );
};

export default React.memo(Overlay);
