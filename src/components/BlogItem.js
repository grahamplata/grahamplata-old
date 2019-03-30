import React from "react";
import { Link } from "gatsby";

import BlogListItem from "../theme/containers/BlogItem";

const BlogItem = props => (
  <BlogListItem>
    <div>
      <Link to={props.path}>
        <b>{props.title}</b>
      </Link>
      <small> -- {props.excert}</small>
    </div>
    <>
      <small>{props.date}</small>
      <small>
        {" [ "}
        {props.tags.map(tag => {
          return tag.charAt(0).toUpperCase() + tag.slice(1) + " ";
        })}
        {"]"}
      </small>
    </>
  </BlogListItem>
);

export default BlogItem;
