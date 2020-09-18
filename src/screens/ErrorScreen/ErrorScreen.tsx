import React from "react";
import { Image } from "../../components";
import { Images, Strings } from "../../constants";
import { Link } from "react-router-dom";
import "./ErrorScreen.scss";

function ErrorScreen() {
  return (
    <div className="errorpage-wrapper">
      <div className="errorpage-contents">
        <div className="image-wrapper">
          <Image source={Images.ERROR} altText="404 - Error" />
        </div>
        <Link to={Strings.APPLICATION.ROUTES.HOME}>Go to Home Page</Link>
      </div>
    </div>
  );
}

export default ErrorScreen;
