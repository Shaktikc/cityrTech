import React, { useState } from "react";
import { authenticationData } from "../../Data/authenticationData";
import { useForm } from "react-hook-form";

export const useLogin = () => {
  const [login, setLogin] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); //
  async function handleLogin(data) {
    if (
      (authenticationData.userId =
        data.userId && authenticationData.password === data.password)
    ) {
      setLogin("login successful!");
    }
  }
  return { register, handleSubmit, errors, handleLogin, login };
};
