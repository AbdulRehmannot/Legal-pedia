import { Link, useNavigate } from "react-router-dom";
import "./loginForm.scss";

// import logo from "../../assets/imgs/logo.png";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { validate } from "email-validator";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import GoogleAuthBtn from "../../components/googleAuthBtn/GoogleAuthBtn";
import { auth } from "../../config/firebase";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailAndPassword = () => {
    if (!email.trim() && !password.trim()) {
      alert("auth", "*Enter email and password");
      return;
    }

    if (!validate(email.trim())) {
      alert("email", "*Invalid email");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });

        setIsLoading(false);
        navigate("/chat");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("errorMessage ", errorMessage);
        if (errorMessage === "Firebase: Error (auth/invalid-credential).") {
          alert("auth *Invalid email or password");
          return;
        } else if (errorMessage === "Firebase: Error (auth/invalid-email).") {
          alert("email *Invalid email");
          return;
        } else {
          let toastError = `An error occured ${errorMessage}`;
          // window.toastify(toastError, "error");
          console.log(toastError);
        }
      });
  };

  return (
    <div className="loginForm">
      <div className="logo mb-5">
        <Link to="/" className="logo_link">
          {/* <img src={logo} alt="logo" /> */}
          <h2>LOGO</h2>
        </Link>
      </div>
      <div className="loginForm_form">
        <h2>Welcome Back</h2>
        <div className="loginForm_form_input">
          <EmailOutlinedIcon />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="loginForm_form_input">
          <VpnKeyOutlinedIcon />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="loginForm_form_loginBtn">
          <button className="btn" onClick={handleEmailAndPassword}>
            Login
          </button>
        </div>
        <p className="loginForm_form_forgot">
          <Link className="loginForm_form_forgot_link">Forgot Password?</Link>
        </p>
      </div>

      <div className="divider">
        <div className="line"></div>
        <span>or</span>
        <div className="line"></div>
      </div>

      {/* Google login btn component */}
      <GoogleAuthBtn />

      <div className="dontHvAccount">
        <p>Don't have an account?</p>
        <Link className="link" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
