import React, { useEffect, useState, useContext } from "react";
import "./googleAuthBtn.scss";

import googleIcon from "../../assets/imgs/google.png";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth, provider } from "../../config/firebase";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const GoogleAuthBtn = () => {
  const { dispatch } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     auth.onAuthStateChanged((user) => {
  //       if (user) {
  //         console.log("Auth Changed ", user);
  //         checkUser(user);
  //       }
  //     });
  //   }, []);

  //handleGoogle
  const handleGoogle = async () => {
    setIsLoading(true);
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          console.log(credential);
          console.log(result.user);

          const signedInUser = result.user; // Get the user info from the sign-in result

          dispatch({ type: "LOGIN", payload: signedInUser });
          // window.toastify("User is signin successfully", "success");

          setIsLoading(false);
          navigate("/chat/provincial/punjab/women-dev");
        })
        .catch((error) => {
          setIsLoading(false);
          console.error(error.message, "error");
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };
  return (
    <div className="googleLogin_btn">
      <button className="btn" onClick={handleGoogle} disabled={isLoading}>
        <img src={googleIcon} alt="" />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleAuthBtn;
