import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center mt-5">
      <p>
        <small>Copyright &copy; {year}</small>
      </p>
    </footer>
  );
};

export default Footer;
