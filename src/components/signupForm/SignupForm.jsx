import "./signupForm.scss";
import { Link, useNavigate } from "react-router-dom";

// import logo from "../../assets/imgs";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { useContext, useState } from "react";
import { validate } from "email-validator";
import { AuthContext } from "../../context/AuthContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase";
import GoogleAuthBtn from "../googleAuthBtn/GoogleAuthBtn";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setCpassword("");
  };

  const signUp = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully created the user
        const user = userCredential.user;

        // Update user profile with display name
        return updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            // Dispatch user information and perform other actions as needed
            dispatch({ type: "LOGIN", payload: user });
            console.log("User ", user);
            resetForm();
            setIsLoading(false);
            navigate("/chat");
          })
          .catch((profileError) => {
            // Handle profile update error

            console.error("Error updating profile:", profileError);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;

        if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
          alert("This email is already registered.");
        } else {
          // Handle other sign-up errors
          alert("Error signing up:", error);
          console.error("Error signing up:", error);
        }

        setIsLoading(false);
      });
  };

  const handleSignUp = () => {
    if (!validate(email.trim())) {
      alert("email", "Invalid email");
      return;
    }

    if (password.trim().length < 8) {
      alert("password", "Password should be atleast 8 digits");
      return;
    }

    if (password.trim() !== cPassword.trim()) {
      alert("cPassword", "Password not match");
      return;
    }

    signUp();
  };

  return (
    <div className="signupForm">
      <div className="logo mb-5">
        <Link to="/" className="logo_link">
          <h2>LOGO</h2>
          {/* <img src={logo} alt="logo" /> */}
        </Link>
      </div>
      <div className="signupForm_form">
        <h2>Create an account</h2>
        <div className="signupForm_form_input">
          <EmailOutlinedIcon />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="signupForm_form_input">
          <EmailOutlinedIcon />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signupForm_form_input">
          <VpnKeyOutlinedIcon />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="signupForm_form_input">
          <VpnKeyOutlinedIcon />
          <input
            type="password"
            placeholder="Repeat Password"
            value={cPassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
        </div>
        <div className="signupForm_form_loginBtn">
          <button className="btn" onClick={handleSignUp}>
            Sign up
          </button>
        </div>
      </div>

      <div className="divider">
        <div className="line"></div>
        <span>or</span>
        <div className="line"></div>
      </div>

      {/* Google login btn component */}

      <GoogleAuthBtn />

      <div className="alreadyHvAccount">
        <p>Already have an account?</p>
        <Link className="link" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
