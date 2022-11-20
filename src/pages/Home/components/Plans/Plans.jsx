import styles from "./Plans.module.scss";
import homeStyles from "../../Home.module.scss";
import BtnDoccureExplore from "~/components/button/BtnDoccureExplore";
import basic from "~/assets/images/homePage/plans/basic.png";
import enterPrise from "~/assets/images/homePage/plans/enter-prise.png";
import label from "~/assets/images/homePage/plans/label.png";
import midRange from "~/assets/images/homePage/plans/mid-range.png";

function Plans() {
  return (
    <section id={styles.plans} className="py-5">
      <div className="container">
        <div className="row animation-InUp">
          <div className="col">
            <h2
              className={`text-center ${homeStyles["sections-main-heading"]}`}
            >
              Choose Best Plans For You
            </h2>
          </div>
        </div>
        <div className="row pt-5 animation-InUp">
          <div className="col-md-3">
            <div className="p-3 h-100">
              <div className="plans-head py-5 resp-0" />
              <ul className={`list-unstyled h-100 ${styles["setup"]}`}>
                <li>Setup Cost</li>
                <li>Logins</li>
                <li>Patient Login</li>
                <li>Patient Health Records</li>
                <li>Number of Appointments</li>
                <li>White Labelled Website</li>
                <li>Pharmacy</li>
                <li>Ecommerce</li>
                <li>Laboratory</li>
                <li>White Labelled Patient Mobile App (IOS / Android)</li>
                <li>White Labelled Doctor App (IOS / Android)</li>
                <li>Source Code</li>
                <li>Support Plan</li>
                <li>Feature Customization</li>
                <li>SEO / Promotions</li>
                <li>Virtual Admin Staff ***</li>
                <li>Hosting</li>
                <li>Languages</li>
                <li>Payment Gateway</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`card shadow p-3 h-100 ${styles["card"]}`}>
              <img src={label} className={`${styles["label"]}`} alt="label" />
              <div className="plans-head py-4 text-center">
                <img src={basic} alt="Basic" />
                <h4 className="pt-2">Basic</h4>
              </div>
              <ul className="list-unstyled h-100">
                <li>On Reqeust</li>
                <li>Unlimited</li>
                <li>Unlimited</li>
                <li>Unlimited</li>
                <li>Unlimited</li>
                <li>Included</li>
                <li>Included</li>
                <li>Included</li>
                <li>Included</li>
                <li>
                  Included
                  <br />
                  (IOS / Android)
                </li>
                <li>
                  Included <br />
                  (IOS / Android)
                </li>
                <li>Not Included</li>
                <li>Regular Business Hours</li>
                <li>Yes **</li>
                <li>Yes **</li>
                <li>1200$ / Mo</li>
                <li>Cloud</li>
                <li>English</li>
                <li>Stripe / PayPal</li>
              </ul>
              <BtnDoccureExplore
                title="BOOK A DEMO"
                style={{ textAlign: "center" }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className={`card shadow p-3 h-100 ${styles["card"]}`}>
              <img src={label} className={`${styles["label"]}`} alt="label" />
              <div className="plans-head py-4 text-center">
                <img src={midRange} alt="Basic" />
                <h4 className="pt-2">Midrange</h4>
              </div>
              <ul className="list-unstyled h-100">
                <li>On Reqeust</li>
                <li>Unlimited</li>
                <li>Unlimited</li>
                <li>Unlimited</li>
                <li>Unlimited</li>
                <li>Included</li>
                <li>Not Included</li>
                <li>Not Included</li>
                <li>Not Included</li>
                <li>
                  Included
                  <br />
                  (IOS / Android)
                </li>
                <li>
                  Included
                  <br />
                  (IOS / Android)
                </li>
                <li>Not Included</li>
                <li>Regular Business Hours</li>
                <li>Yes **</li>
                <li>Yes **</li>
                <li>1200$ / Mo</li>
                <li>Cloud / On Premise</li>
                <li>Customizable (Multi Language)</li>
                <li>Customizable</li>
              </ul>
              <BtnDoccureExplore
                title="BOOK A DEMO"
                style={{ textAlign: "center" }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className={`card shadow p-3 h-100 ${styles["card"]}`}>
              <img src={label} className={`${styles["label"]}`} alt="label" />
              <div className="plans-head py-4 text-center">
                <img src={enterPrise} alt="Telemedicine" />
                <h4 className="pt-2">Enterprise</h4>
              </div>
              <ul className="list-unstyled h-100">
                <li>On Reqeust</li>
                <li>Unlimited</li>
                <li>Unlimited</li>
                <li>Unlimited</li>
                <li>Unlimited</li>
                <li>Included</li>
                <li>Included</li>
                <li>Included</li>
                <li>Included</li>
                <li>
                  Included
                  <br />
                  (IOS / Android)
                </li>
                <li>
                  Included
                  <br />
                  (IOS / Android)
                </li>
                <li>Not Included</li>
                <li>Regular Business Hours</li>
                <li>Yes **</li>
                <li>Yes **</li>
                <li>1200$ / Mo</li>
                <li>Cloud</li>
                <li>English</li>
                <li>Stripe / PayPal</li>
              </ul>
              <BtnDoccureExplore
                title="BOOK A DEMO"
                style={{ textAlign: "center" }}
              />
            </div>
          </div>
        </div>
        <div className="row pt-5 animation-InUp">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <p>** - Charged Additional</p>
              </div>
              <div className="col-md-6">
                <p>
                  *** - Staff can work remote 8 Hrs per day and for 5 days a
                  week
                </p>
              </div>
              <div className="col-md-3">
                <p>3rd Party expenses additional??</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;
