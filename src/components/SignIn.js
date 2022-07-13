import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import LandingSection from "./LandingSection";


function SignIn() {

  return (
    <>
        <div className='flex flex-col justify-center items-center  md:w-full'>
            <h1 className='font-extrabold text-3xl mb-5 dark:text-white pt-10 px-10'>Sign-in</h1>
        </div>
            <div className='flex flex-col justify-center items-center  '>
                <div className='bg-white dark:bg-zinc-800  rounded-xl w-80 h-96  flex flex-col py-10 px-14 lg:w-2/5 sm:w-96 '>
                    <h1 className='dark:text-white font-medium text-xl'>Name</h1>
                    <input type='text' className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 pr-3 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1 sm:text-sm' placeholder="Name"></input>
                </div>
        </div>
    </>
  );
}

export default SignIn;