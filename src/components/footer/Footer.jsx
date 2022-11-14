import styles from "./Footer.module.scss";
import footerThumb from "~/assets/images/footer/thumb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import BtnDoccureExplore from "~/components/button/BtnDoccureExplore";

function Footer() {
  return (
    <footer id={styles.footer} className={styles.sections}>
      <div className={`container-fluid  py-5 ${styles["top-footer"]}`}>
        <div className="row animation-InUp">
          <div className="col-12 text-center">
            <img src={footerThumb} alt="Image" />
            <h2 className="pt-3 font-weight-bold text-white">
              Feeling in love? Purchase Doccure!
            </h2>
            <p className="text-white mb-5">
              Impressive Design, Powerful Features and Easy Customization
            </p>
            <BtnDoccureExplore title="Request a Demo" />
          </div>
        </div>
      </div>
      <div className={`container-fluid  pt-3 ${styles["bottom-footer"]}`}>
        <div className="row">
          <div className="col-12 text-center">
            <h6 className="text-white font-weight-bold">Follow us</h6>
            <ul className="list-inline-item list-unstyled">
              <li className="list-inline-item">
                <a href="#" target="_blank" className="text-white">
                  <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" className="text-white">
                  <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" className="text-white">
                  <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.pinterest.com/doccure_software/"
                  target="_blank"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faPinterestP} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
