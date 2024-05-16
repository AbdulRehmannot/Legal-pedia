import { Link } from "react-router-dom";
import "./footer.scss";
import Subscribe from "../subscribe/Subscribe";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <div className="container py-5 mt-4 footer">
        <div className="row g-5">
          <div className="col-12 col-lg-6 col-md-6">
            <Subscribe />
          </div>
          <div className="col-6 col-lg-3 col-md-3 social_icons">
            <h5>Follow us on</h5>
            <ul>
              <li>
                <a href="/">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="/">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="/">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3 col-md-3">
            <h5>Go To</h5>
            <ul>
              <li>
                <Link className="footer_link">Home</Link>
              </li>
              <li>
                <Link className="footer_link">About</Link>
              </li>
              <li>
                <Link className="footer_link">Features</Link>
              </li>
              <li>
                <Link className="footer_link">Pricing</Link>
              </li>
              <li>
                <Link className="footer_link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy_rigth p-3">
        <p>
          <span>LegelPedia</span>&copy;2024. Copyrights Protected. All Rights
          Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
