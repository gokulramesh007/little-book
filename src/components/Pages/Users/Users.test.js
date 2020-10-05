import React from "react";
import { cleanup } from "@testing-library/react";
import { renderUtil } from "../../../utils";
import { Users } from "../../../components";
import { userData } from "../../../constants";
import { userService } from "../../../services";

afterEach(cleanup);

it("Users : render", () => {
  const { getByTestId } = renderUtil(<Users />);
  const user = getByTestId("users");
  expect(user).toBeInTheDocument;
});

it("render with mock data", async () => {
  const { getByTestId } = renderUtil(<Users />);
  const user = getByTestId("users");
  const users = await userService.getUsers();
  
  expect(users[0].username).toEqual("markantony");

  jest
    .spyOn(userService, "getUsers")
    .mockImplementation(() => Promise.resolve(userData));

  expect(user).toMatchSnapshot();

  userService.getUsers.mockRestore();
});
