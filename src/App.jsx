import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import publicRoutes from "routes/publicRoutes";
import privateRoutes from "routes/privateRoutes";

const ErrorPage = lazy(() => import("pages/ErrorPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

const router = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes,
  {
    path: "*",
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
