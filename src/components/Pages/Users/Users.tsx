import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleOverlay } from "../../../redux";
import { Overlay, UserList } from "../../../components";
import "./Users.scss";

interface UsersInterface {
  theme?: string;
}

const defaultProps: UsersInterface = {
  theme: "light"
};

const Users: React.FC<UsersInterface> = ({ theme }: UsersInterface) => {
  const users = useSelector((state: any) => state.user.users);
  const dispatch = useDispatch();

  const handleOverlayClick = () => {
    console.log("close overlay!");
    dispatch(toggleOverlay({ users: false, newBlog: false }));
  };

  return (
    <Overlay theme={theme} closeOverlay={handleOverlayClick}>
      <div data-testid="users" className="users-wrapper">
        <div className="title">Members</div>
        <UserList data={users} theme={theme} />
      </div>
    </Overlay>
  );
};

Users.defaultProps = defaultProps;

export default React.memo(Users);
