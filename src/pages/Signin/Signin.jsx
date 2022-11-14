import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import styles from "./Signin.module.scss";
import logo from "~/assets/images/homePage/Banner/doctor.png";
import slider1 from "~/assets/images/loginPage/banner-1.jpg";
import slider2 from "~/assets/images/loginPage/banner-2.jpg";
import slider3 from "~/assets/images/loginPage/banner-3.jpg";

function Signin() {
  return (
    <div
      id={styles["signin-page"]}
      className={`d-flex justify-content-center align-items-center ${styles.wrapper}`}
    >
      <div
        className={`d-flex justify-content-center align-items-center ${styles["box-content"]}`}
      >
        <Link to="/" className={styles["home-page"]}>
          <FontAwesomeIcon icon={faHouse} />
        </Link>

        <form className={styles.form}>
          <div className={styles.logo}>
            <img src={logo} alt="Doctor" />
          </div>
          <h2 className={`mt-4 text-center ${styles.title}`}>Sign In</h2>
          <p className={`mb-3 text-center ${styles.slogan}`}>
            See your health and get consulting support
          </p>
          <div className="input-group mb-3">
            <span className="input-group-text" style={{ width: "40px" }}>
              <FontAwesomeIcon icon={faUser} style={{ color: "#ff5b62" }} />
            </span>
            <input
              type="text"
              id="txtUsername"
              className="form-control"
              spellCheck="false"
              placeholder="Your username"
            />
            <div className="valid-feedback">
              This field is required and cannot be empty!
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" style={{ width: "40px" }}>
              <FontAwesomeIcon icon={faKey} style={{ color: "#ff5b62" }} />
            </span>
            <input
              type="password"
              id="txtPassword"
              className="form-control"
              placeholder="Your password"
            />
            <div className="valid-feedback">
              This field is required and cannot be empty!
            </div>
          </div>

          <div className="input-group mb-3 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                defaultValue
                aria-label="Checkbox for following text input"
              />
              <span className="ms-2">Remember me</span>
            </div>
            <div className="right">
              <a href="#" className="forget-password fw-bold">
                Forget password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            id="btnSignin"
            className={`mt-2 text-white ${styles["btn-submit"]}`}
          >
            <i className="fa-solid fa-spinner d-none" />
            SIGN IN
          </button>

          <p className="mt-4 mb-0">
            <span className="me-2">Not registered yet?</span>
            <Link to="/signup" className="fw-bold">
              Create an Account
            </Link>
          </p>
        </form>

        <div className={`position-relative ${styles["login-slider"]}`}>
          <Carousel interval={2000}>
            <Carousel.Item>
              <img className="d-block w-100" src={slider1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slider2} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slider3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Signin;
