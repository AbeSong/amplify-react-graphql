import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import About from "./routes/About";
import Faq from "./routes/Faq";
import Contact from "./routes/Contact";
import TermsOfService from "./routes/TermsOfService";
import Privacy from "./routes/Privacy";
import Application from "./Application";
import AppAdmin from "./AppAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "faq",
    element: <Faq />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact-us",
    element: <Contact />,
  },
  {
    path: "trademarkable/trademark",
    element: <Application />,
  },
  {
    path: "terms-of-service",
    element: <TermsOfService />,
  },
  {
    path: "privacy-policy",
    element: <Privacy />,
  },
  {
    path: "/admin",
    element: <AppAdmin />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
