import React from "react";
import { Image } from "../../../components";
import { Strings } from "../../../constants";
import "./UserCard.scss";

interface UserCardInterface {
  data: any;
  theme?: string;
}

const defaultProps: UserCardInterface = {
  data: {},
  theme: "light"
};

const UserCard: React.FC<UserCardInterface> = ({
  data,
  theme
}: UserCardInterface) => {
  return (
    <div className={`user-card-wrapper ${theme}`}>
      <div className="image-wrapper">
        <Image
          source={Strings.APPLICATION.ROOT_URL + data.photo}
          altText={data.name}
        />
      </div>
      <div className="title">
        {data.name}
      </div>
      <div className="city">
        {data.address.city}
      </div>
    </div>
  );
};

UserCard.defaultProps = defaultProps;

export default React.memo(UserCard);
