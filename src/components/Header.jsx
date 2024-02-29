import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import profileimg from "../utils/images/netflixprofile.jpg";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const imgLogo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute flex justify-between w-screen z-10 px-20 py-5 bg-gradient-to-b from-black">
      <img className="w-44" src={imgLogo} alt="" />

      {user && (
        <div className="flex p-2 ">
          <img
            style={{ width: "50px", height: "50px" }}
            src={profileimg}
            alt="user icon"
          />
          <button className="font-bold" onClick={handleSignOut}>
            {" "}
            (Sign-Out){" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
