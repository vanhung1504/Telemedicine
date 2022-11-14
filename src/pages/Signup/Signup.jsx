import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileSignature,
  faUser,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Signup.module.scss";
import logo from "~/assets/images/homePage/Banner/doctor.png";

function Signup() {
  return (
    <div
      id={styles["signup-page"]}
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
          <h2 className={`mt-4 text-center ${styles.title}`}>Sign Up</h2>
          <p className={`mb-3 text-center ${styles.slogan}`}>
            See your health and get consulting support
          </p>

          <div className="input-group mb-3">
            <span className="input-group-text" style={{ width: "40px" }}>
              <FontAwesomeIcon
                icon={faFileSignature}
                style={{ color: "#ff5b62" }}
              />
            </span>
            <input
              type="text"
              id="txtFirstname"
              className="form-control"
              spellCheck="false"
              placeholder="Your firstname"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="At least one character"
            />
            <div className="valid-feedback">
              This field is required and cannot be empty!
            </div>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" style={{ width: "40px" }}>
              <FontAwesomeIcon
                icon={faFileSignature}
                style={{ color: "#ff5b62" }}
              />
            </span>
            <input
              type="text"
              id="txtLastname"
              className="form-control"
              spellCheck="false"
              placeholder="Your lastname"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="At least one character"
            />
            <div className="valid-feedback">
              This field is required and cannot be empty!
            </div>
          </div>

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
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Username must be 4 - 10 characters long, contain only letters or numbers, and must begin with a character"
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
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Password must be 6 - 20 characters long"
            />
            <div className="valid-feedback">
              This field is required and cannot be empty!
            </div>
          </div>

          <div className="input-group mb-3 d-flex justify-content-between align-items-center">
            <div className="left d-flex align-items-center">
              <input
                id="ckbAgree"
                className="form-check-input mt-0"
                type="checkbox"
                defaultValue
                aria-label="Checkbox for following text input"
              />
              <span className="remember-me ms-2">
                I agree with
                <a href="#" className="ms-1 fw-bold">
                  Teams &amp; Conditions
                </a>
              </span>
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
            <span className="me-2">Already have an Account?</span>
            <Link to="/signin" className="fw-bold">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
