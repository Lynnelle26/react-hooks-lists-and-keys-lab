import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const attribute = links.map((link) => (
    <a key={link} href={"#"+link}>{link}</a>
  ));

  return <nav>{attribute}</nav>;
};

export default NavBar;
