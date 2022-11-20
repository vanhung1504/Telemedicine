import styles from "./Home.module.scss";
import Banner from "./components/Banner/Banner";
import Solutions from "./components/Solutions/Solutions";
import SpecialHighlights from "./components/SpecialHighlights/SpecialHighlights";
import Plans from "./components/Plans/Plans";
import App from "./components/App/App";
import FAQ from "./components/FAQ/FAQ";
import Features from "./components/Features/Features";
import Contact from "./components/Contact/Contact";

function Home() {
  return (
    <>
      <Banner />
      <Solutions />
      <SpecialHighlights />
      <App />
      <Plans />
      <FAQ />
      <Features />
      <Contact />
    </>
  );
}

export default Home;
