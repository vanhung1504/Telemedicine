import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";
import logo from "~/assets/images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

import BtnDoccureExplore from "../button/BtnDoccureExplore";

function Header() {
  const menu = [
    {
      path: "/",
      label: "Home",
    },
    {
      label: "Features",
      subMenu: [
        {
          path: "#",
          label: "Telemedicine",
        },
        {
          path: "#",
          label: "Online Appointment System",
        },
        {
          path: "#",
          label: "Hospital & Clinic Management",
        },
        {
          path: "#",
          label: "E-Pharmacy",
        },
        {
          path: "#",
          label: "Laboratory Management",
        },
      ],
    },
    {
      path: "/#plans",
      label: "Pricing",
    },
    {
      path: "/#get-contact",
      label: "Contact Us",
    },
    {
      path: "/#faq",
      label: "FAQ",
    },
    {
      path: "/blogs",
      label: "Blogs",
    },
  ];

  return (
    <header>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-light bg-transparent ${styles.displayBackground}`}
        id={styles.navbar}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {menu.map((item, index) => {
                let menuEle = [];
                if (!item.subMenu) {
                  menuEle.push(
                    <li className="nav-item" key={index}>
                      <NavLink
                        className={({ isActive }) =>
                          !isActive
                            ? `${styles["nav-link"]} }`
                            : String(item.path).substr(0, 2) === "/#"
                            ? `${styles["nav-link"]} }`
                            : `${styles["nav-link"]} ${styles["active"]}`
                        }
                        to={item.path}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  );
                } else {
                  menuEle.push(
                    <li className={`nav-item ${styles.dropdown}`} key={index}>
                      <a
                        className={`dropdown-toggle ${styles["nav-link"]} `}
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Features
                      </a>
                      <ul
                        className={`dropdown-menu ${styles["dropdown-menu"]}`}
                        aria-labelledby="navbarDropdown"
                      >
                        {item.subMenu.map((subItem, index) => (
                          <li key={index}>
                            <NavLink
                              className={`${styles["dropdown-item"]}`}
                              to={subItem.path}
                            >
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return menuEle;
              })}

              <li className={`nav-item ${styles["nav-btn"]}`}>
                <NavLink className={`${styles["nav-link"]}`} to="./signin">
                  Sign In
                </NavLink>
              </li>
              <li className={`nav-item ms-2 ${styles["nav-btn"]}`}>
                <NavLink className={`${styles["nav-link"]}`} to="./signup">
                  Sign Up
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown nav-user d-none ms-2 d-flex align-items-center">
                <div className="user-avatar" role="button">
                  <img
                    src="./assets/images/banner/doctor.png"
                    alt="Avatar"
                    className="img-fluid"
                  />
                </div>
                <ul className="dropdown-menu user-dropdown">
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="./user.html"
                    >
                      <i className="fa-solid fa-user me-3" />
                      <span className="fullname" />
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="btn-signout">
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i className="fa-solid fa-right-from-bracket me-3" />
                      <span>Sign out</span>
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
