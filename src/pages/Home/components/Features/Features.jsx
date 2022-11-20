import styles from "./Features.module.scss";
import homeStyles from "../../Home.module.scss";
import IOT from "~/assets/images/homePage/features/IOT.png";
import Labs from "~/assets/images/homePage/features/Labs.png";
import Insurance from "~/assets/images/homePage/features/insurance.png";
import Gmaps from "~/assets/images/homePage/features/gmaps.jpg";

function Features() {
  return (
    <section id={styles.features} className="py-5">
      <div className="container-fluid">
        <div className="row animation-InUp pb-5">
          <div className="col">
            <h2
              className={`text-center ${homeStyles["sections-main-heading"]}`}
            >
              Upcoming Features
            </h2>
            <h3 className={`text-center ${homeStyles["sections-main-desc"]}`}>
              We are going to include these awsome features shortly.
            </h3>
          </div>
        </div>
        <div className="row animation-InUp pt-4">
          <div className="h-100 col-md-3">
            <div
              className={`card shadow p-3 text-center h-100 ${styles["card"]}`}
            >
              <img
                src={IOT}
                className={`mx-auto ${styles["image"]}`}
                alt="Image"
              />
              <h4 className="font-weight-bold py-3">IOT</h4>
              <p>
                IOT integrations - Data capture from IOT powered clinical / lab
                devices through API's and offer meaningful insights to Doctors
                and patients
              </p>
            </div>
          </div>
          <div className="h-100 col-md-3">
            <div
              className={`card shadow p-3 text-center h-100 ${styles["card"]}`}
            >
              <img
                src={Labs}
                className={`mx-auto ${styles["image"]}`}
                alt="Image"
              />
              <h4 className="font-weight-bold py-3">Labs</h4>
              <p>
                Integration with Labs / Institutes to send and procure test
                results.(e.g.:Scan Centres / X Rays)
              </p>
            </div>
          </div>
          <div className="h-100 col-md-3">
            <div
              className={`card shadow p-3 text-center h-100 ${styles["card"]}`}
            >
              <img
                src={Insurance}
                className={`mx-auto ${styles["image"]}`}
                alt="Image"
              />
              <h4 className="font-weight-bold py-3">Insurance</h4>
              <p>
                Integration with Insurance providers to share Patient Data and
                Health reports.
              </p>
            </div>
          </div>
          <div className="h-100 col-md-3">
            <div
              className={`card shadow p-3 text-center h-100 ${styles["card"]}`}
            >
              <img
                src={Gmaps}
                className={`mx-auto ${styles["image"]}`}
                alt="Image"
              />
              <h4 className="font-weight-bold py-3">Google Maps</h4>
              <p>
                Google Maps API implementation for helping Patients to navigate
                to Doctors's Address
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
