import React from 'react';
import { Link } from 'gatsby';

const BlogNav = props => {
  const { next, prev } = props;
  const isLast = next === false;
  const isFirst = prev === false;
  return (
    <>
      <div>
        {isFirst ? <></> : <Link to={prev.frontmatter.path}>Prev</Link>}
        {isLast ? <></> : <Link to={next.frontmatter.path}>Next</Link>}
      </div>
    </>
  );
};

export default BlogNav;
