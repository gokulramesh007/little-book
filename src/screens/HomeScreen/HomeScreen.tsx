import React, { lazy, Suspense, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleOverlay } from "../../redux";
import { Blogs, Details, Menu, Loader } from "../../components";
import "./HomeScreen.scss";

const Users = lazy(() => import("../../components/Pages/Users/Users"));
const NewBlog = lazy(() => import("../../components/Pages/NewBlog/NewBlog"));

const HomeScreen = () => {
  const [theme, setTheme] = useState("light");
  const overlay = useSelector((state: any) => state.overlay.showOverlay);
  const dispatch = useDispatch();

  const changeTheme = () => {
    console.log("changeTheme");
    setTheme(theme === "light" ? "dark" : "light");
  };

  const viewUsers = () => {
    dispatch(toggleOverlay({ ...overlay, users: !overlay.users }));
  };

  const addBlog = () => {
    dispatch(toggleOverlay({ ...overlay, newBlog: !overlay.newBlog }));
  };

  return (
    <div className="homescreenWrapper">
      <Menu theme={theme} changeTheme={changeTheme} viewUsers={viewUsers} />
      <Blogs theme={theme} addBlog={addBlog} />
      <Details theme={theme} />
      <Suspense fallback={<Loader />}>
        {overlay.users && Users ? <Users theme={theme} /> : null}
        {overlay.newBlog && NewBlog ? <NewBlog theme={theme} /> : null}
      </Suspense>
    </div>
  );
};

export default React.memo(HomeScreen);
