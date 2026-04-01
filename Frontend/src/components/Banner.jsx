import React from "react";


function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto  px-4 md:px-19 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et tota. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 1 4 1.5h8A1.5 1.5 0 0 1 13.5 3v.793c.026.009.051.02.076.032L7.674 8.51c-.206.146-.446.146-.652 0L1.924 3.825A.5.5 0 0 1 2.5 3z" />
                <path d="M15 6.954 8.978 9.862a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11A1.5 1.5 0 0 0 15 11.5V6.954z" />
              </svg>

              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Secondary</button>
        </div>
        <div className="order-1 w-full md:w-1/2 flex justify-center items-center">
  <img 
    src="/Banner1.png" 
    alt="Banner" 
    /* Remove dark:bg-slate-900 from here! */
    className="w-full h-auto  transition-all duration-300"
  />
</div>
      </div>
    </>
  );
}

export default Banner;
