import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout() {
  return (
    <>
      <Header />
      <main style={{ margin: "110px 0 20px 0" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
