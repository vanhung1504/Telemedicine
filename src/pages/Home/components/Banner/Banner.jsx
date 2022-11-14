import styles from "./Banner.module.scss";
import BtnDoccureExplore from "~/components/button/BtnDoccureExplore";
import doctor from "~/assets/images/homePage/banner/doctor.png";

function Banner() {
  return (
    <section id={styles.banner}>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-md-7`}>
            <h1 className={`text-white ${styles["banner-title"]}`}>
              Telemedicine &amp; Online
              <br />
              Appointment Booking Software
            </h1>
            <h4 className={`pt-3 text-white ${styles["banner-desc"]}`}>
              Doccure helps the Hospitals and Independent Doctors to consult
              with the Patients, manage Patient health records. Doctors and
              Patients can connect virtually and consult through secured video
              and audio calls.
            </h4>
            <BtnDoccureExplore
              title="EXPLORE FEATURES"
              href="#solutions"
              style={{ display: "inline-block", marginTop: "20px" }}
            />
          </div>
          <div
            className={`col-md-5 animation-right ${styles["doctor-img-box"]}`}
          >
            <img
              src={doctor}
              alt="Doctor"
              className={`img-fluid ${styles["doctor-img"]}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
