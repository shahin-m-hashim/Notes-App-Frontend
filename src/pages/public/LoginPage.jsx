import { cn } from "utils/cn";
import { useEffect } from "react";
import useStore from "store/_store";
import { Link } from "react-router";
import { loginUser } from "api/authApi";
import { useNavigate } from "react-router";
import { useShallow } from "zustand/shallow";
import { useMutation } from "@tanstack/react-query";
import { RotatingLines } from "react-loader-spinner";

export default function LoginPage() {
  const navigate = useNavigate();

  const [resetForm, loginForm, setLoginFormField, setShowPasswordValue] =
    useStore(
      useShallow((state) => [
        state.resetForm,
        state.authSlice.login,
        state.setLoginFormField,
        state.setShowPasswordValue,
      ])
    );

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => navigate("/"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      email: loginForm.email,
      password: loginForm.password,
    });
  };

  const isFormInValid = !loginForm.email || !loginForm.password;
  const isDisabled = isFormInValid || mutation.isPending;

  useEffect(() => {
    return () => resetForm("login");
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:border-[rgb(218,218,218)] md:border items-center w-full gap-5 md:shadow-lg md:p-10 md:w-3/4 xl:w-1/2"
      >
        <img
          alt="website logo"
          className="hidden w-1/2 h-10 md:block"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        />

        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-[#475569]"
          >
            EMAIL
          </label>
          <input
            id="email"
            type="text"
            name="email"
            autoComplete="off"
            placeholder="Email"
            value={loginForm.email}
            className="w-full p-2 bg-[#e2e8f0] rounded-md"
            onChange={(e) => setLoginFormField("email", e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-[#475569]"
          >
            PASSWORD
          </label>

          <div className="relative">
            <input
              id="password"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              className="w-full p-2 bg-[#e2e8f0] rounded-md"
              type={loginForm.showPassword ? "text" : "password"}
              onChange={(e) => setLoginFormField("password", e.target.value)}
            />

            {loginForm.showPassword ? (
              <button
                type="button"
                className="absolute -translate-y-1/2 top-1/2 right-2"
                onClick={() => setShowPasswordValue("login", false)}
              >
                <img
                  className="size-6"
                  alt="hide password"
                  src="icons/eye-closed.svg"
                />
              </button>
            ) : (
              <button
                type="button"
                className="absolute -translate-y-1/2 top-1/2 right-2"
                onClick={() => setShowPasswordValue("login", true)}
              >
                <img
                  className="size-6"
                  alt="show password"
                  src="icons/eye-opened.svg"
                />
              </button>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className={cn(
            "bg-[#0b69ff] w-full p-2 text-white rounded-md flex justify-center",
            isDisabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
          )}
        >
          {mutation.isPending ? (
            <RotatingLines
              width="20"
              height="20"
              strokeColor="black"
              animationDuration="0.75"
            />
          ) : (
            "Login"
          )}
        </button>

        {mutation.isError && (
          <p className="text-[#ff0b37] text-center">{mutation.error.message}</p>
        )}
      </form>

      <Link to="/auth/signup" className="text-[#0b69ff]">
        Don&apos;t have an account? Register.
      </Link>
    </>
  );
}
