import { useState } from "react";
import Header from "./Header";

const imgsrc =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm =()=>{
     setIsSignInForm(!isSignInForm)
  }


  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src={imgsrc} alt="" />
      </div>
      <form
        className="p-12 bg-black absolute w-3/12
       my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className ="font-bold text-3xl py-4 px-2 ">
          { isSignInForm? "Sign In" : "Sign Up"}
          </h1>

          {
          !isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-2 m-4 w-full bg-gray-700 rounded-sm"
        />
        }

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-4 w-full bg-gray-700 rounded-sm"
        />
      
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-4 w-full bg-gray-700 rounded-sm"
        />
        <button
          className="p-4 m-4 w-full
        bg-red-700 rounded-sm
        "
        >
          { isSignInForm? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 px-4 cursor-pointer" onClick={toggleSignInForm}>
        { isSignInForm? "New to Netflix? Sign up now" : "Already registered? Sign in now"}
          </p>
      </form>
    </div>
  );
};

export default Login;
