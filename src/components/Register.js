import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import { useAuth } from "../context/authContext";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log("TEST");

  const { singup } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    singup(user.email, user.password);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-20">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-zinc-50 dark:bg-zinc-800 px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center font-bold dark:text-white">
              Sign up
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                class="block border border-zinc-100 dark:border-zinc-700 w-full p-2 rounded mb-5 dark:bg-zinc-900 dark:text-white"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />

              <input
                type="password"
                class="block border border-zinc-100 dark:border-zinc-700 w-full p-2 rounded mb-5 dark:bg-zinc-900 dark:text-white"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <button
                type="submit"
                class="w-full text-center py-3 rounded bg-red-500 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>

            <div class="text-center text-sm text-grey-dark mt-4 dark:text-zinc-50">
              Already have an account?
              <a
                class="no-underline border-b border-blue text-blue"
                href="../sign-in"
              >
                Log in
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
