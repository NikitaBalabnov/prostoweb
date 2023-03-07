import React from "react";
import { Link, useMatch } from "react-router-dom";

const CustomRouterLink = ({ to, children, ...props }) => {
  const match = useMatch(to);
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};
// style = {{color: match ? ' rgb(224, 248, 8)' : '#fff'}}
//
export default CustomRouterLink;
