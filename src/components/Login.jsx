import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"

const imgsrc =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate =useNavigate()
  const dispatch  = useDispatch()

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMsg(msg);

    if (msg) return;

    if (!isSignInForm) {
      //  sign-up
      createUserWithEmailAndPassword(
         auth,
         email.current.value, 
         password.current.value
         )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
             photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ 
              uid: uid, 
              email: email, 
              displayName: displayName }));
            navigate('/browse')
          }).catch((error) => {
             setErrorMsg(error.message)  
          });

          console.log(user);
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode +":"+ errorMessage)
        });
    } else {
      //  sign-in
      signInWithEmailAndPassword(
         auth,         
         email.current.value, 
         password.current.value
         )
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate("/browse")


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode +":"+ errorMessage)
      });

    }
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src={imgsrc} alt="" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black absolute w-3/12
       my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 px-2 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-4 w-full bg-gray-700 rounded-sm"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-4 w-full bg-gray-700 rounded-sm"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-4 w-full bg-gray-700 rounded-sm"
        />
        <p
          className="text-red-500 font-bold text-lg py-4
        "
        >
          {errorMsg}{" "}
        </p>
        <button
          className="p-4 mx-4  w-full
        bg-red-700 rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 px-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
