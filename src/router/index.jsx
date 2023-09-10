import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    name: "404",
    path: "*",
    element: <p>Not found</p>,
  },
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
