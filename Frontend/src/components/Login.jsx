import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched", // This ensures errors only appear when the button is clicked
  });

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login successfull");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error" + err.response.data.message);
        setTimeout(() => {}, 3000);
      });

    document.getElementById("my_modal_3").close();
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-95 max-w-md border-[0.5px]">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-semibold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span className="">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className=" w-80 px-3 py-1 border rounded-md outline-none 
               dark:bg-slate-900 dark:text-white"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span className="">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className=" w-80 px-3 py-1 border rounded-md outline-none 
               dark:bg-slate-900 dark:text-white"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
        <form
          method="dialog"
          className="modal-backdrop bg-black/40 backdrop-blur-[1px]"
        >
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Login;
