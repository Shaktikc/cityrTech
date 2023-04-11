export const usernameValidate = {
  required: {
    value: true,
    message: "Please enter username",
  },
  minLength: {
    value: 6,
    message: "Username must be at least 6 characters long",
  },
  pattern: {
    value: /^[a-zA-Z0-9]+$/,
    message: "Username must be alphanumeric",
  },
};

export const userNameValidate = {
  required: {
    value: true,
    message: "Please enter an email address",
  },
  pattern: {
    value: 4,
    message: "Email address is not valid",
  },
};

export const passwordValidate = {
  required: {
    value: true,
    message: "Please enter password",
  },
  minLength: {
    value: 6,
    message: "Password must be at least 6 characters long",
  },
};
