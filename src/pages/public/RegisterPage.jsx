import { cn } from "utils/cn";
import { useEffect } from "react";
import useStore from "store/_store";
import { Link } from "react-router";
import { registerUser } from "api/authApi";
import { useNavigate } from "react-router";
import { useShallow } from "zustand/shallow";
import { useMutation } from "@tanstack/react-query";
import { RotatingLines } from "react-loader-spinner";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [
    resetForm,
    registerForm,
    setRegisterFormField,
    setShowPasswordValue,
    setShowConfirmPasswordValue,
  ] = useStore(
    useShallow((state) => [
      state.resetForm,
      state.authSlice.register,
      state.setRegisterFormField,
      state.setShowPasswordValue,
      state.setShowConfirmPasswordValue,
    ])
  );

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      resetForm("register");
      navigate("/auth/login");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      name: registerForm.name.value,
      email: registerForm.email.value,
      password: registerForm.password.value,
      confirmPassword: registerForm.confirmPassword.value,
    });
  };

  const isFormInValid = Object.values(registerForm).some(
    (field) => !field.value || field.error
  );

  const isDisabled = isFormInValid || mutation.isPending;

  useEffect(() => {
    return () => resetForm("register");
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
            htmlFor="name"
            className="text-sm font-semibold text-[#475569]"
          >
            NAME
          </label>
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Name"
            value={registerForm.name.value}
            className="w-full p-2 bg-[#e2e8f0] rounded-md"
            onChange={(e) => setRegisterFormField("name", e.target.value)}
          />

          {registerForm.name.error && (
            <p className="text-[#ff0b37]">{registerForm.name.error}</p>
          )}
        </div>

        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-[#475569]"
          >
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="off"
            placeholder="email"
            value={registerForm.email.value}
            className="w-full p-2 bg-[#e2e8f0] rounded-md"
            onChange={(e) => setRegisterFormField("email", e.target.value)}
          />

          {registerForm.email.error && (
            <p className="text-[#ff0b37]">{registerForm.email.error}</p>
          )}
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
              value={registerForm.password.value}
              className="w-full p-2 bg-[#e2e8f0] rounded-md"
              type={registerForm.password.showValue ? "text" : "password"}
              onChange={(e) => setRegisterFormField("password", e.target.value)}
            />

            {registerForm.password.showValue ? (
              <button
                type="button"
                className="absolute -translate-y-1/2 top-1/2 right-2"
                onClick={() => setShowPasswordValue("register", false)}
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
                onClick={() => setShowPasswordValue("register", true)}
              >
                <img
                  className="size-6"
                  alt="show password"
                  src="icons/eye-opened.svg"
                />
              </button>
            )}
          </div>

          {registerForm.password.error && (
            <p className="text-[#ff0b37]">{registerForm.password.error}</p>
          )}
        </div>

        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-[#475569]"
          >
            CONFIRM PASSWORD
          </label>

          <div className="relative">
            <input
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
              value={registerForm.confirmPassword.value}
              className="w-full p-2 bg-[#e2e8f0] rounded-md"
              type={
                registerForm.confirmPassword.showValue ? "text" : "password"
              }
              onChange={(e) =>
                setRegisterFormField("confirmPassword", e.target.value)
              }
            />

            {registerForm.confirmPassword.showValue ? (
              <button
                type="button"
                onClick={() => setShowConfirmPasswordValue(false)}
                className="absolute -translate-y-1/2 top-1/2 right-2"
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
                onClick={() => setShowConfirmPasswordValue(true)}
                className="absolute -translate-y-1/2 top-1/2 right-2"
              >
                <img
                  className="size-6"
                  alt="show password"
                  src="icons/eye-opened.svg"
                />
              </button>
            )}
          </div>

          {registerForm.confirmPassword.error && (
            <p className="text-[#ff0b37]">
              {registerForm.confirmPassword.error}
            </p>
          )}
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
            "Register"
          )}
        </button>

        {mutation.isError && (
          <p className="text-[#ff0b37] text-center">{mutation.error.message}</p>
        )}
      </form>

      <Link to="/auth/login" className="text-[#0b69ff]">
        Already have an account? Log In.
      </Link>
    </>
  );
}
