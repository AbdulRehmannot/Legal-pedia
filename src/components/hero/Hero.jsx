import "./hero.scss";
// import heroImg from "../assets/imgs/hero.png";

const Hero = () => {
  return (
    <div className="container-fluid hero">
      {/* <div className="hero_bg_img">
        <img src={heroImg} alt="hero" />
      </div> */}
      {/* <div className="conatiner hero_content"> */}
      <div className="row hero_content">
        <div className="col-12 col-lg-7 col-md-7">
          <h1>
            <span>LegalPedia</span> Your <br />
            Virtual Ally in Law
          </h1>
          <p>
            An intelligent chatbot facilitates legal research by providing quick
            access to federal and provincial laws in Pakistan, engaging in
            natural conversation.
          </p>
          <button className="btn hero_btn">Get Started</button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
