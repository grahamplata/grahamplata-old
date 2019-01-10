import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Button, Header, Icon } from "semantic-ui-react";

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
        <Header as="h2" textAlign="left">
          <Header.Content>{props.title}</Header.Content>
        </Header>
        <Header as="h3" textAlign="left">
          <Header.Content>{props.date}</Header.Content>
        </Header>
      </Fragment>
    </Fragment>
  );
};

export default BlogMenu;
