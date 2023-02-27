import { navData } from "../assets/navData";
import { Link } from "react-router-dom";
import NavCSS from "../styles/navbar.module.css";

export const Navbar = () => {
  const navLinks = navData.map((menu) => {
    const sublinks = menu.submenus.map((sublink) => {
      return (
        <Link
          key={sublink.submenuTitle}
          className={NavCSS.link}
          to={sublink.path}
        >
          <span>{sublink.submenuIcon}</span>
          <span>{sublink.submenuTitle}</span>
        </Link>
      );
    });
    return (
      <div key={menu.title}>
        <h3 className={NavCSS.title}>{menu.title}</h3>
        <div className={NavCSS.linkContainer}>{sublinks}</div>
      </div>
    );
  });

  return (
    <nav className={NavCSS.navbar}>
      <h1>interNetflix</h1>
      <div>{navLinks}</div>
    </nav>
  );
};
