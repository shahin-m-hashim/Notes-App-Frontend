import { lazy, Suspense } from "react";
import PublicLayout from "layouts/publicLayout";

const LoginPage = lazy(() => import("pages/public/LoginPage"));
const RegisterPage = lazy(() => import("pages/public/RegisterPage"));

const ErrorPage = lazy(() => import("pages/ErrorPage"));

const publicRoutes = [
  {
    path: "auth",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: (
          <Suspense>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense>
            <RegisterPage />
          </Suspense>
        ),
      },
    ],
  },
];

export default publicRoutes;
