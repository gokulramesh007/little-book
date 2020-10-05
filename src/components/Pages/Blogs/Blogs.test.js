import React from "react";
import { cleanup } from "@testing-library/react";
import { renderUtil } from "../../../utils";
import { Blogs } from "../../../components";
import { blogData } from "../../../constants";
import { blogService } from "../../../services";

afterEach(cleanup);

it("Blogs : render", () => {
  const { getByTestId } = renderUtil(<Blogs />);
  const blog = getByTestId("blogs");
  expect(blog).toBeInTheDocument;
});

it("render with mock data", async () => {
  const { getByTestId } = renderUtil(<Blogs />);
  const blog = getByTestId("blogs");
  const blogs = await blogService.getBlogs();
  
  expect(blogs[0].title).toEqual("How to Time Travel");

  jest
    .spyOn(blogService, "getBlogs")
    .mockImplementation(() => Promise.resolve(blogData));

  expect(blog).toMatchSnapshot();

  blogService.getBlogs.mockRestore();
});
