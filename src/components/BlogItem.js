import React from "react";
import { Link } from "gatsby";

const BlogItem = props => (
  <>
    <div>
      {props.date}{" "}
      <Link to={props.path}>
        <b>{props.title}</b>
      </Link>{" "}
      {props.excert}
    </div>
  </>
);

export default BlogItem;
