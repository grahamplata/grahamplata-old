import React from "react";
import { Link } from "gatsby";

const BlogItem = props => (
  <>
    <div>
      <div>
        <Link to={props.path}>
          <b>{props.title}</b>
        </Link>
      </div>
      {props.date} -- {props.excert}
    </div>
  </>
);

export default BlogItem;
