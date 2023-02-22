import { navData } from "../../assets/navData";
import { Link } from "react-router-dom";
import NavCSS from "../../styles/navbar.module.css";

export const Navbar = () => {
  const navLinks = navData.map((menu) => {
    const sublinks = menu.submenus.map((sublink) => {
      return (
        <>
          <Link to={sublink.path}>
            <span>{sublink.submenuIcon}</span>
            <span>{sublink.submenuTitle}</span>
          </Link>
        </>
      );
    });
    return (
      <>
        <h3>{menu.title}</h3>
        <div className={NavCSS.linkContainer}>{sublinks}</div>
      </>
    );
  });

  return (
    <>
      <h1>interNetflix</h1>
      <div>{navLinks}</div>
    </>
  );
};
