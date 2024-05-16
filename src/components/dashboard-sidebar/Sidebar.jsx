import "./sidebar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import logo from "../../assets/imgs/logo.png";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import GavelIcon from "@mui/icons-material/Gavel";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import ArticleIcon from "@mui/icons-material/Article";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BalanceIcon from "@mui/icons-material/Balance";
import FemaleIcon from "@mui/icons-material/Female";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const [showSidebar, setShowSidebar] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleMenuClick = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    const confirmResult = window.confirm("Are you sure to logout?");
    if (confirmResult) {
      try {
        signOut(auth);
        dispatch({ type: "LOGOUT" });
        sessionStorage.clear();
        navigate("/", { replace: true });
      } catch (error) {
        console.log("Error while doing logout");
      }
    } else console.log("Logout Canceled");
  };

  return (
    <>
      <div
        className={`d-flex flex-column flex-shrink-0 text-bg-dark dashboardSidebar ${
          smallScreen && "smallScreen"
        } ${showSidebar && "show-sidebar"}`}
        style={{ width: "280px" }}
      >
        <div className="sidebar_header">
          <Link
            href="/dashboard"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none sidebar_header_link"
            style={{ textAlign: "center" }}
          >
            <h2>LOGO</h2>
            {/* <img src={logo} alt="logo" className="sidebar_headerlogo" /> */}
          </Link>

          {showSidebar && (
            <CloseIcon
              className="sidebar_header_closeBtn"
              onClick={handleSidebar}
            />
          )}
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={handleMenuClick}>
            <Link
              to="/chat/combined-law"
              className={`nav-link text-white ${
                location.pathname === "/chat/combined-law" ? "active" : ""
              }`}
              aria-current="page"
            >
              <BalanceIcon />
              Combined Law Chatbot
            </Link>
          </li>

          <li className="nav-item" onClick={handleMenuClick}>
            <Link
              to="/chat/federal-law"
              className={`nav-link text-white ${
                location.pathname === "/chat/federal-law" ? "active" : ""
              }`}
            >
              <AccountBalanceIcon />
              <span>Federal law Chatbot</span>
            </Link>
          </li>
          <li className="nav-item" onClick={handleMenuClick}>
            <Link
              className={`nav-link text-white ${
                location.pathname === "/chat/provincial/*" ? "active" : ""
              }`}
            >
              <GavelIcon />
              <span>Provincial law chatbot</span>
            </Link>
            <ul>
              <li className="nav-item">
                <KeyboardArrowDownIcon />
                <span>Punjab</span>

                <ul className="ps-0">
                  <li className="nav-item" onClick={handleMenuClick}>
                    <Link
                      to="/chat/provincial/punjab/women-dev"
                      className={`nav-link text-white ${
                        location.pathname ===
                        "/chat/provincial/punjab/women-dev"
                          ? "active"
                          : ""
                      }`}
                    >
                      <FemaleIcon />
                      <span>Women & Dev</span>
                    </Link>
                  </li>
                  <li className="nav-item" onClick={handleMenuClick}>
                    <Link
                      to="/chat/provincial/punjab/auqaf-relgious-afairs"
                      className={`nav-link text-white ${
                        location.pathname ===
                        "/chat/provincial/punjab/auqaf-relgious-afairs"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Diversity1Icon />
                      <span>Auqaaf & Religious affairs</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav-item" onClick={handleMenuClick}>
            <Link
              to="/chat/ordinance"
              className={`nav-link text-white ${
                location.pathname === "/chat/ordinance" ? "active" : ""
              }`}
            >
              <GavelIcon />
              <span>Ordinance</span>
            </Link>
          </li>
          <li className="nav-item" onClick={handleMenuClick}>
            <Link
              to="/chat/judgments"
              className={`nav-link text-white ${
                location.pathname === "/chat/judgments" ? "active" : ""
              }`}
            >
              <AutoAwesomeMotionIcon />
              <span>Judgments</span>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="sidebar_footer">
          <div className="dropdown">
            <Link
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={user?.photoURL || "https://github.com/mdo.png"}
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>
                {user?.displayName.length > 0
                  ? user?.displayName.split(" ")[0]
                  : user?.displayName || "User"}
              </strong>
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              {/* <li>
                <Link className="dropdown-item" href="#">
                  Profile
                </Link>
              </li> */}
              {/* <li>
                <hr className="dropdown-divider" />
              </li> */}
              <li>
                <Link className="dropdown-item" onClick={handleLogout}>
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          {/* <span>Help</span> */}
        </div>
      </div>
      {!showSidebar && smallScreen && (
        <MenuIcon
          onClick={handleSidebar}
          style={{
            color: "var(--primary)",
            fontSize: "30px",
            zIndex: 10000,
            position: "absolute",
            top: "16px",
            left: "10px",
          }}
        />
      )}
    </>
  );
}

export default Sidebar;
