import { Outlet } from "react-router";
import { Navigate } from "react-router";

export default function PublicLayout() {
  if (localStorage.getItem("isAuthenticated")) return <Navigate to="/" />;

  return (
    <section className="h-scroll overflow-auto min-w-[320px] flex flex-col">
      <main className="flex flex-col items-center justify-center flex-1 w-full p-5 md:p-0 md:flex-row">
        <div className="flex flex-col items-center flex-1 gap-5 justify-evenly md:items-end">
          <img
            alt="website logo"
            className="w-1/2 md:hidden"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />

          <img
            alt="website login"
            className="md:w-[80%]"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          />
        </div>

        <div className="flex flex-col justify-center flex-1 w-full gap-4 md:items-center">
          <Outlet />
        </div>
      </main>
    </section>
  );
}
