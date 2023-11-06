import React, { useState } from "react";
import Button from "./../../components/Button";
import Input from "./../../components/Input";
import { Link } from "react-router-dom";
import Card from "./../../components/Card";
import GoogleIcon from "../../components/Icons/GoogleIcon";
import axiosConfig from "../../api/authApi";
import useAxiosFunction from "../../hooks/useAxiosFunction";
import { __isErrors, validateRegister } from "../../validations";
import { registerSuccess } from "../../utils/constants";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {},
  });
  
  const [data, error, loading, axiosFetch] = useAxiosFunction(registerSuccess);
  const handleFormInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = () => {
    const errors = validateRegister(form);

    if (__isErrors(errors)) {
      setForm({ ...form, errors: errors });
      return false;
    }

    setForm({ ...form, errors: {} });

    const registerFormData = {
      name: form.name,
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword,
    };

    axiosFetch({
      axiosInstance: axiosConfig,
      method: "POST",
      url: "/register",
      requestConfig: registerFormData,
      redirectUrl: '/admin'
    });
  };
  return (
    <>
      <Card className="sm:min-w-[500px]">
        <h1 className="text-indigo-950 text-title-md text-center">
          Register Into Tracker
        </h1>
        <Button
          variant="secondary"
          icon={<GoogleIcon />}
          text="Google Login"
          className="my-14 w-full"
        />
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            autofocus
            name="name"
            error={form.errors.name}
            placeholder="Name"
            value={form.name}
            onChange={handleFormInput}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            error={form.errors.email}
            value={form.email}
            onChange={handleFormInput}
          />
          <Input
            type={"password"}
            name="password"
            error={form.errors.password}
            value={form.password}
            placeholder="Password"
            onChange={handleFormInput}
          />
          <Input
            type={"password"}
            name="confirmPassword"
            value={form.confirmPassword}
            error={form.errors.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleFormInput}
          />
        </div>
        <Button
          onClick={handleSubmitForm}
          className="mt-12 w-full"
          variant="primary"
          text="Register"
          loader={loading}
        />
        <p className="mt-12 text-center">
          <span>Already have account ? </span>
          <Link to="/login" className="text-semibold text-violet-700">
            Sign In
          </Link>
        </p>
      </Card>
    </>
  );
};

export default Register;
