import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signin } from "../../api/auth";
import { authenticated, isAuthenticate } from "../../auth";
import { useHistory } from "react-router-dom";

export default function Signin() {
  const { sub } = isAuthenticate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = async (data) => {
    try {
      const response = await signin(data);
      authenticated(response.data.accessToken);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError(error.response.data);
    }
  };
  const redirectUser = () => {
    if (success) {
      if (sub == 1) {
        history.push("/admin");
      } else {
        history.push("/");
      }
    }
  };
  return (
    <>
      {redirectUser()}
      <form className="mt-5 col-6 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        {error && <div className="alert alert-danger mb-2">{error}</div>}
        <h2>Đăng nhập</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Địa chỉ mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            {...register("email")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Mật khẩu
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password")}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Đăng nhập
        </button>
      </form>
    </>
  );
}
