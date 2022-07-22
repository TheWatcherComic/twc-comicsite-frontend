import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import NavbarPublic from "./NavbarPublic";

function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login , loginWithGoogle} = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate("/home");
    } catch (error) {
        console.log(error.code);
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () =>{
    await loginWithGoogle();
    navigate("/home");
  }

  return (
    <>
    <NavbarPublic />
      <div className="flex flex-col justify-center items-center pt-20">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-zinc-50 dark:bg-zinc-800 px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center font-bold dark:text-white">
              Log-in
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
                Log-in
              </button>
            </form>

            <div class="text-center text-sm text-grey-dark mt-4 dark:text-zinc-50">
              Don't have an account yet?
              <a
                class="no-underline border-b border-blue text-blue"
                href="../register"
              >
                Sign-up
              </a>
              .
            </div>
            <div class="flex justify-center pt-5">
              <button onClick={handleGoogleSignIn} type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign in with Google</button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
