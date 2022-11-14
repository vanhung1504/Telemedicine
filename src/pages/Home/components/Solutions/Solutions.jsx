import styles from "./Solutions.module.scss";
import homeStyles from "../../Home.module.scss";
import BtnDoccureExplore from "~/components/button/BtnDoccureExplore";

import telemedicine from "~/assets/images/homePage/solutions/telemedicine.png";
import telemedicineWhite from "~/assets/images/homePage/solutions/telemedicine-white.png";
import onlineApptSystem from "~/assets/images/homePage/solutions/online-appt-system.png";
import onlineApptSystemWhite from "~/assets/images/homePage/solutions/online-appt-system-white.png";
import hospitalClinicManagement from "~/assets/images/homePage/solutions/hospital-clinic-management.png";
import hospitalClinicManagementWhite from "~/assets/images/homePage/solutions/hospital-clinic-management-white.png";
import ePharmacy from "~/assets/images/homePage/solutions/e-pharmacy.png";
import ePharmacyWhite from "~/assets/images/homePage/solutions/e-pharmacy-white.png";
import laboratoryManagement from "~/assets/images/homePage/solutions/laboratory-management.png";
import laboratoryManagementWhite from "~/assets/images/homePage/solutions/laboratory-management-white.png";
import eCommerce from "~/assets/images/homePage/solutions/e-commerce.png";
import eCommerceWhite from "~/assets/images/homePage/solutions/e-commerce-white.png";
import solutionBanner from "~/assets/images/homePage/solutions/solutionBanner.png";

function Solutions() {
  return (
    <section id={styles.solutions}>
      <div className="container">
        <div className={`row ${styles["animation-InUp"]}`}>
          <div className="col">
            <h2
              className={`text-center ${homeStyles["sections-main-heading"]}`}
            >
              Solutions
            </h2>
          </div>
        </div>
        <div className={`row pt-2 ${styles["animation-InUp"]}`}>
          <div className="col-md-4 col-lg-2 py-3">
            <a href="#" className="text-decoration-none text-muted">
              <div
                className={`card shadow p-3 h-100 text-center ${styles.card}`}
              >
                <img
                  src={telemedicine}
                  alt="Telemedicine"
                  className={styles["red-telemedicine"]}
                />
                <img
                  src={telemedicineWhite}
                  alt="Telemedicine"
                  className={styles["white-telemedicine"]}
                />
                <h4 className={`pt-3 ${styles["solution-item"]}`}>
                  Telemedicine
                </h4>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 py-3">
            <a href="#" className="text-decoration-none text-muted">
              <div
                className={`card shadow p-3 h-100 text-center ${styles.card}`}
              >
                <img
                  src={onlineApptSystem}
                  alt="Telemedicine"
                  className={styles["red-telemedicine"]}
                />
                <img
                  src={onlineApptSystemWhite}
                  alt="Telemedicine"
                  className={styles["white-telemedicine"]}
                />
                <h4 className={`pt-3 ${styles["solution-item"]}`}>
                  Online Appointment Management
                </h4>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 py-3">
            <a href="#" className="text-decoration-none text-muted">
              <div
                className={`card shadow p-3 h-100 text-center ${styles.card}`}
              >
                <img
                  src={hospitalClinicManagement}
                  alt="Telemedicine"
                  className={styles["red-telemedicine"]}
                />
                <img
                  src={hospitalClinicManagementWhite}
                  alt="Telemedicine"
                  className={styles["white-telemedicine"]}
                />
                <h4 className={`pt-3 ${styles["solution-item"]}`}>
                  Hospital and Clinic Management
                </h4>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 py-3">
            <a href="#" className="text-decoration-none text-muted">
              <div
                className={`card shadow p-3 h-100 text-center ${styles.card}`}
              >
                <img
                  src={ePharmacy}
                  alt="Telemedicine"
                  className={styles["red-telemedicine"]}
                />
                <img
                  src={ePharmacyWhite}
                  alt="Telemedicine"
                  className={styles["white-telemedicine"]}
                />
                <h4 className={`pt-3 ${styles["solution-item"]}`}>
                  e-Pharmacy
                </h4>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 py-3">
            <a href="#" className="text-decoration-none text-muted">
              <div
                className={`card shadow p-3 h-100 text-center ${styles.card}`}
              >
                <img
                  src={laboratoryManagement}
                  alt="Telemedicine"
                  className={styles["red-telemedicine"]}
                />
                <img
                  src={laboratoryManagementWhite}
                  alt="Telemedicine"
                  className={styles["white-telemedicine"]}
                />
                <h4 className={`pt-3 ${styles["solution-item"]}`}>
                  Laboratory Management
                </h4>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 py-3">
            <a href="#" className="text-decoration-none text-muted">
              <div
                className={`card shadow p-3 h-100 text-center ${styles.card}`}
              >
                <img
                  src={eCommerce}
                  alt="Telemedicine"
                  className={styles["red-telemedicine"]}
                />
                <img
                  src={eCommerceWhite}
                  alt="Telemedicine"
                  className={styles["white-telemedicine"]}
                />
                <h4 className={`pt-3 ${styles["solution-item"]}`}>
                  e-Commerce
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`row pt-4 ${styles["animation-InUp"]}`}>
          <div className="col-md-6 mb-2">
            <h4 className={`${homeStyles["sections-sub-heading"]}`}>
              Telemedicine
            </h4>
            <p className={`pt-2 ${homeStyles["sections-sub-desc"]}`}>
              In today’s fast growing digital world, there are multiple number
              of digital ways (like video chats, emails, SMS, phone calls and
              various applications) through which the patients are connected to
              the medical professionals. Telemedicine is a method of connecting
              the patients and doctors through technology without meeting in
              person where the doctor provides the best health care service to
              the patient. It is also known as digital medicine. Patients can
              connect doctors via desktop, smart phone or laptop with reliable
              internet connection.
            </p>
            <ul className={`pl-0 pt-4 list-unstyled ${styles["management"]}`}>
              <li>Improves Time Management</li>
              <li>Improves Patient Engagement</li>
              <li>Reduce Costs</li>
              <li>Avoids long waiting queue</li>
              <li>Increased Patient and Provider satisfaction</li>
            </ul>
            <BtnDoccureExplore
              href="#"
              title="LEARN MORE"
              style={{
                display: "inline-block",
                marginTop: "20px",
              }}
            />
          </div>
          <div className="col-md-6">
            <img
              src={solutionBanner}
              alt="Telemedicine"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
