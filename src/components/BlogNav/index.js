import React from "react";
import { Link } from "gatsby";
import { Button } from "semantic-ui-react";

const BlogNav = props => {
  const { next, prev } = props;
  const isLast = next === false;
  const isFirst = prev === false;
  return (
    <>
      <Button.Group floated="right" compact>
        {isFirst ? (
          <Button as={Link} disabled={isFirst}>
            Prev
          </Button>
        ) : (
          <Button as={Link} to={prev.frontmatter.path}>
            Prev
          </Button>
        )}
        {isLast ? (
          <Button as={Link} disabled={isLast}>
            Next
          </Button>
        ) : (
          <Button as={Link} to={next.frontmatter.path}>
            Next
          </Button>
        )}
      </Button.Group>
    </>
  );
};

export default BlogNav;
