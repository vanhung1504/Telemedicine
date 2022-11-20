import styles from "./SpecialHighlights.module.scss";
import homeStyles from "../../Home.module.scss";
import computer from "~/assets/images/homePage/special_highlights/computer.png";

function SpecialHighlights() {
  return (
    <section id={styles["special-highlights"]} className="py-5">
      <div className="container">
        <div className={`row ${styles["animation-InUp"]}`}>
          <div className="col">
            <h2
              className={`text-center ${homeStyles["sections-main-heading"]}`}
            >
              Special Highlights
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pt-4 animation-InUp">
          <div className="col-md-6">
            <img src={computer} alt="Telemedicine" className="img-fluid" />
          </div>
          <div className="col-md-6 mb-2">
            <h4 className={`${homeStyles["sections-sub-heading"]}`}>
              Doccure B2B Website
            </h4>
            <h5 className={`py-3 ${homeStyles["sections-sub-sub-heading"]}`}>
              Doccure B2B website focus to be laid in presenting the product
            </h5>
            <p className={`${homeStyles["sections-sub-desc"]}`}>
              Doccure B2B website focus to be laid in presenting the product,
              its offerings to the Business Clients.
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-2">
        <div className="row pt-4 animation-InUp">
          <div className="col-md-6 order-md-2">
            <img src={computer} alt="Telemedicine" className="img-fluid" />
          </div>
          <div className="col-md-6 order-md-1 mb-2">
            <h4 className={`${homeStyles["sections-sub-heading"]}`}>
              Independent Clinics
            </h4>
            <h5 className={`py-3 ${homeStyles["sections-sub-sub-heading"]}`}>
              Doccure B2B website focus to be laid in presenting the product
            </h5>
            <p className={`${homeStyles["sections-sub-desc"]}`}>
              Doccure B2B website focus to be laid in presenting the product,
              its offerings to the Business Clients.
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-2">
        <div className="row pt-4 animation-InUp">
          <div className="col-md-6">
            <img src={computer} alt="Telemedicine" className="img-fluid" />
          </div>
          <div className="col-md-6 mb-2">
            <h4 className={`${homeStyles["sections-sub-heading"]}`}>
              Laboratories
            </h4>
            <h5 className={`py-3 ${homeStyles["sections-sub-sub-heading"]}`}>
              Doccure B2B website focus to be laid in presenting the product
            </h5>
            <p className={`${homeStyles["sections-sub-desc"]}`}>
              Doccure B2B website focus to be laid in presenting the product,
              its offerings to the Business Clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialHighlights;
