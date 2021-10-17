import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signup } from "../../api/auth";
import { authenticated } from "../../auth";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = async (data) => {
    try {
      const response = await signup(data);
      console.log(response);
      authenticated(response.data.accessToken);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError(error.response.data);
    }
  };
  return (
    <form className=" col-6 mx-auto sign" onSubmit={handleSubmit(onSubmit)}>
      {error && <div className="alert alert-danger mb-2">{error}</div>}
      {success && (
        <div className="alert alert-success mb-2">
          Bạn đã đăng ký thành công. Click <Link to="/signin">vào đây</Link> để
          Đăng nhập
        </div>
      )}

      <h2>Đăng ký</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Tên tài khoản
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          {...register("username")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Địa chỉ email
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
        Đăng ký
      </button>
    </form>
  );
};

export default Signup;
