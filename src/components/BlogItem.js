import React from "react";
import { Link } from "gatsby";

import BlogListItem from "../theme/containers/BlogItem";

const BlogItem = props => (
  <BlogListItem>
    <div>
      <Link to={props.path}>
        <b>{props.title}</b>
      </Link>{" "}
      <small>-- {props.date}</small>
    </div>
    <div>
      <small>{props.excert}</small>
    </div>
  </BlogListItem>
);

export default BlogItem;
