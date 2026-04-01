import React from 'react'
import { useForm } from "react-hook-form";

function Contact() {
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
      
    };
  return (
    <div className="flex h-screen items-center justify-center">
     
        <div className=" shadow-md p-5 rounded-md  w-96">
          <form onSubmit={handleSubmit(onSubmit)} >
            {/* if there is a button in form, it will close the modal */}
            

            <h3 className="font-semibold text-2xl">Contact Us</h3>
            <div className="mt-7 ">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className=" w-full px-3 py-1 border rounded-md outline-none border-black/10 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                {...register("name", { required: true })}
              />
              <br/>
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-2">
              <span className="">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className=" w-full px-3 py-1 border rounded-md outline-none border-black/10 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
           {/* meassag */}
           <div className="mt-4 space-y-2">
              <span className="">Message</span>
              <br />
              <textarea
                type="text"
                placeholder="Type your message"
                className=" w-full px-3 py-1 border rounded-md outline-none  border-black/10 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && <span className="text-sm text-red-500">This field is required</span>}
            </div>



            {/* Button */}
            <div className="flex  mt-4">
              <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                Submit
              </button>
              
            </div>
          </form>
        </div>
        
      
    </div>
  )
}

export default Contact
