import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
      <Link
        style={{
          letterSpacing: "1px",
          color: match ? "#F05454" : "#fff",
          textDecoration: match ? "underline" : "none",
          textUnderlineOffset: "8px",
          textDecorationColor: match && "#F05454",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>  
  );
};

export default CustomLink;
