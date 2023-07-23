import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AppLayout from "./App";
import About from "../Page/About";
import Video from "../Page/Video";
import Store from "../Page/Store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
  },
  {
    path: "/video",
    element: <Video /> ,
  },
  {
    path: "/store",
    element: <Store/> ,
  },
  { 
    path: "/about",
    element:<About/> ,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);