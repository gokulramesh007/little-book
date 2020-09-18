import React from "react";
import { UserCard } from "../../../components";
import "./UserList.scss";

interface UserListInterface {
  data: Array<any>;
  column?: string;
  theme?: string;
}

const defaultProps: UserListInterface = {
  data: [],
  theme: "light",
  column: "three"
};

const UserList: React.FC<UserListInterface> = ({
  theme,
  column,
  data
}: UserListInterface) => {
  const _renderUserTiles = () => {
    let userList: any = [];
    if (data.length === 0) {
      userList.push(
        <div className={`no-users-wrapper ${theme}`} key={0}>
          No Users to display!
        </div>
      );
    } else {
      data.forEach(item => {
        userList.push(
          <div className={`tiles ${theme}`} key={item.id}>
            <UserCard data={item} theme={theme} />
          </div>
        );
      });
    }
    return userList;
  };

  return (
    <div className={`user-list-wrapper ${column}`}>
      {_renderUserTiles()}
    </div>
  );
};

UserList.defaultProps = defaultProps;

export default React.memo(UserList);
