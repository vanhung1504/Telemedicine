import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./main.module.scss";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Blogs from "./pages/Blogs/Blogs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path="/"
        element={<Home />}
        errorElement={<div>Có gì đó không ổn!</div>}
      />
      <Route
        path="/signin"
        element={<Signin />}
        errorElement={<div>Có gì đó không ổn!</div>}
      />
      <Route
        path="/signup"
        element={<Signup />}
        errorElement={<div>Có gì đó không ổn!</div>}
      />
      <Route
        path="/blogs"
        element={<Blogs />}
        errorElement={<div>Có gì đó không ổn!</div>}
      />
    </Route>
  ),
  {
    basename: import.meta.env.VITE_BASE_URL,
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
