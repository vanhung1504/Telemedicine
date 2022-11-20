import styles from "./App.module.scss";
import homeStyles from "../../Home.module.scss";
import GGPlay_AppStore from "~/assets/images/homePage/app/GGPlay_AppStore.png";
import appNow from "~/assets/images/homePage/app/app-now.png";

function App() {
  return (
    <section id={styles.app} className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 animation-left d-flex flex-column justify-content-center">
            <h2 className={`text-white ${homeStyles["sections-main-heading"]}`}>
              Get Doccure App Now!
            </h2>
            <div className={styles["app-img-box"]}>
              <img src={GGPlay_AppStore} className="img-fluid" alt="label" />
            </div>
          </div>
          <div className="col-md-6 animation-right">
            <img
              src={appNow}
              className={`img-fluid ${styles["mob-app"]}`}
              alt="label"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
