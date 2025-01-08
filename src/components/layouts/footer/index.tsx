import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center w-full py-6 border-t">
      <small>
        Copyright © {currentYear} by Gerardus David. All Rights Reserved.
      </small>
    </footer>
  );
};

export default Footer;
