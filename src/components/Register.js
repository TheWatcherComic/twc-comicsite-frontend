import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
        console.log(error.code);
        if(error.code === "auth/invalid-email"){
            setError("Invalid email");
        };
        if(error.code === "auth/weak-password"){
            setError("Password should be at least 6 characters");
        };
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-20">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-zinc-50 dark:bg-zinc-800 px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center font-bold dark:text-white">
              Sign up
            </h1>
            {error && (
              <div
                class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
                role="alert"
              >
                <span class="font-medium">Warning!</span> {error}
              </div>
            )}

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

export default Register;
