import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Button, Icon } from "semantic-ui-react";

const BlogMenu = props => {
  return (
    <Fragment>
      <Button.Group floated="right">
        {props.prev && (
          <Link to={props.prev}>
            <Button content="Previous" icon="left arrow" labelPosition="left" />
          </Link>
        )}
        <Link to="/blog" style={{ paddingRight: "5px", paddingLeft: "5px" }}>
          <Button icon>
            <Icon name="unordered list" />
          </Button>
        </Link>
        {props.next && (
          <Link to={props.next}>
            <Button content="Next" icon="right arrow" labelPosition="right" />
          </Link>
        )}
      </Button.Group>
      <Fragment>
        <div>
          <h1 style={{ margin: 0, display: "inline-block" }}>{props.title}</h1>
        </div>
        <div>
          <h3 style={{ margin: 0, display: "inline-block" }}>{props.date}</h3>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default BlogMenu;
