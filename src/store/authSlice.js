import nameSchema from "schemas/nameSchema";
import emailSchema from "schemas/emailSchema";
import passwordSchema from "schemas/passwordSchema";

const initialLoginForm = {
  email: "",
  password: "",
  showPassword: false,
};

const initialRegisterForm = {
  name: {
    value: "",
    error: null,
  },
  email: {
    value: "",
    error: null,
  },
  password: {
    value: "",
    error: null,
    showValue: false,
  },
  confirmPassword: {
    value: "",
    error: null,
    showValue: false,
  },
};

const createAuthSlice = (set) => ({
  authSlice: {
    login: initialLoginForm,
    register: initialRegisterForm,
  },

  setLoginFormField: (field, value) => {
    set(
      (state) => {
        state.authSlice.login[field] = value;
      },
      undefined,
      "setLoginFormField"
    );
  },

  setRegisterFormField: (field, value) => {
    set(
      (state) => {
        const { register } = state.authSlice;
        register[field].value = value;

        const validators = {
          name: () => {
            const result = nameSchema.safeParse(value);
            register.name.error = !result.success
              ? result.error.issues[0].message
              : null;
          },

          email: () => {
            const result = emailSchema.safeParse(value);
            register.email.error = !result.success
              ? result.error.issues[0].message
              : null;
          },

          password: () => {
            const result = passwordSchema.safeParse(value);
            register.password.error = !result.success
              ? result.error.issues[0].message
              : null;

            if (register.confirmPassword.value) {
              register.confirmPassword.error =
                value !== register.confirmPassword.value
                  ? "Passwords do not match."
                  : null;
            }
          },

          confirmPassword: () => {
            register.confirmPassword.error =
              value !== register.password.value
                ? "Passwords do not match."
                : null;
          },
        };

        validators[field]();
      },
      undefined,
      "setRegisterFormField"
    );
  },

  setShowPasswordValue: (form, show) => {
    set(
      (state) => {
        if (form === "register") {
          state.authSlice.register.password.showValue = show;
        } else {
          state.authSlice.login.showPassword = show;
        }
      },
      undefined,
      "setShowPasswordValue"
    );
  },

  setShowConfirmPasswordValue: (show) => {
    set(
      (state) => {
        state.authSlice.register.confirmPassword.showValue = show;
      },
      undefined,
      "setShowConfirmPasswordValue"
    );
  },

  resetForm: (form) => {
    set(
      (state) => {
        if (form === "login") {
          state.authSlice.login = initialLoginForm;
        } else if (form === "register") {
          state.authSlice.register = initialRegisterForm;
        }
      },
      undefined,
      "resetForm"
    );
  },
});

export default createAuthSlice;
