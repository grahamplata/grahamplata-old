import React from "react";
import { Link } from "gatsby";

const BlogItem = props => (
  <>
    <div>
      <Link to={props.path}>
        <b>{props.title}</b>
      </Link>{" "}
      <small>-- {props.date}</small>
    </div>
    <div>
      <small>{props.excert}</small>
    </div>
  </>
);

export default BlogItem;
