import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import AuthLayout from "../layout/AuthLayout";
// import LoginPage from "../pages/LoginPage";
// import RegisterPage from "../pages/RegisterPage";
// import MainLayout from "../layout/MainLayout";
// import HomePage from "../pages/HomePage";
// import { addUser } from "../features/authSlice";
// import PublicProtected from "./protected/PublicProtected";
// import MainProtected from "./protected/MainProtected";
// import ShopPage from "../pages/ShopPage";
// import AboutPage from "../pages/AboutPage";

import { lazy } from "react";

// Layouts
const AuthLayout = lazy(() => import("../layout/AuthLayout"));
const MainLayout = lazy(() => import("../layout/MainLayout"));

// Pages
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ShopPage = lazy(() => import("../pages/ShopPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));

const PublicProtected = lazy(() => import("./protected/PublicProtected"));

const MainProtected = lazy(() => import("./protected/MainProtected"));

import { addUser } from "../features/authSlice";

const AppRoutes = () => {
  let dispatch = useDispatch();

  const hydrateUser = () => {
    console.log("hydration processed...");
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      toast.error("UnAuthorized user");
      return;
    }

    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "shop",
              element: <ShopPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
