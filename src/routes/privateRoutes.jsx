import { Suspense, lazy } from "react";
import PrivateLayout from "layouts/PrivateLayout";

const ErrorPage = lazy(() => import("pages/ErrorPage"));
const HomePage = lazy(() => import("pages/private/HomePage"));
const NotesPage = lazy(() => import("pages/private/NotesPage"));
const ArchivedNotesPage = lazy(() => import("pages/private/ArchivedNotes"));

const privateRoutes = [
  {
    path: "/",
    element: <PrivateLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "notes",
        element: (
          <Suspense>
            <NotesPage />
          </Suspense>
        ),
      },
      {
        path: "archive",
        element: (
          <Suspense>
            <ArchivedNotesPage />
          </Suspense>
        ),
      },
    ],
  },
];

export default privateRoutes;
