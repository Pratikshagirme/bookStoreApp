import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched", // This ensures errors only appear when the button is clicked
  });

  const onSubmit = (data) => {
    console.log(data);
    // You can manually close the modal here after successful data log
    document.getElementById("my_modal_3").close();
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        {/* Removed the 'modal' hidden logic and added a border/shadow for a card look */}
        <div className="relative border-[0.5px] shadow-md p-5 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)} >
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-semibold text-lg">SignUp</h3>

            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("name", { required: true })}
              />
              <br/>
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Button & Redirect */}
            <div className="flex justify-between items-center mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p className="text-sm">
                Have Account?{" "}
                <button
                  to="/"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
        <Login />
      </div>
    </>
  );
}

export default Signup;
