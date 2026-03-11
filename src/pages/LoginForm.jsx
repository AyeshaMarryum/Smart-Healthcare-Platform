import React from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f6f6fc] font-inter">
      <form
        className="bg-white p-10 rounded-[15px] shadow-lg w-100 text-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="login-header mb-6">
          <div className="logo text-4xl font-bold text-[#7267f0] mb-2">+</div>
          <h2 className="text-2xl font-semibold mb-1">Welcome Back</h2>
          <p className="text-sm text-gray-500 mb-6">
            Secure access to clinical systems
          </p>
        </div>

        <div className="form-group mb-5 text-left">
          <label className="block mb-1 text-sm text-gray-700">Staff Role</label>
          <select
            {...register("role", { required: "Role is required" })}
            className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:border-[#7267f0] outline-none"
          >
            <option value="">Select your role</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
          )}
        </div>

        <div className="form-group mb-5 text-left">
          <label className="block mb-1 text-sm text-gray-700">
            Hospital ID
          </label>
          <input
            type="text"
            placeholder="SH-000-000"
            {...register("hospitalId", { required: "Hospital ID is required" })}
            className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:border-[#7267f0] outline-none"
          />
          {errors.hospitalId && (
            <p className="text-red-500 text-xs mt-1">
              {errors.hospitalId.message}
            </p>
          )}
        </div>

        <div className="form-group mb-5 text-left">
          <label className="block mb-1 text-sm text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            {...register("password", { required: "Password is required" })}
            className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:border-[#7267f0] outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="form-group mb-5 flex items-center text-sm text-gray-700">
          <input type="checkbox" {...register("remember")} className="mr-2" />
          <label>Remember this device</label>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#7267f0] text-white text-lg font-semibold rounded-xl hover:bg-[#5a50d1] transition-colors"
        >
          Secure Login
        </button>

        <p className="text-xs text-gray-500 mt-4">
          Trouble logging in?{" "}
          <a href="#" className="text-[#7267f0] hover:underline">
            Contact IT Desk
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
