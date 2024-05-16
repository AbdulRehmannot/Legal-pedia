import "./aboutUs.scss";
import aboutImg from "../../assets/imgs/about.png";

const AboutUs = () => {
  return (
    <div className="container aboutUs">
      <div className="row gx-5 gy-4">
        <div className="col-12 col-md-6 col-lg-6 aboutUs_img">
          <img src={aboutImg} alt="" />
        </div>
        <div className="col-12 col-md-6 col-lg-6 aboutUs_content">
          <h2>About Us</h2>
          <p>
            An intelligent chatbot that engages in natural conversation, aiming
            to bridge the gap in legal research, by providing quick and precise
            access to federal and provincial laws in Pakistan. Tailored for a
            diverse range of users like lawyers, law students, judges,
            journalists, and legal enthusiasts in Pakistan. Utilizes an adaptive
            approach, initially exploring fine-tuning of an LLM and seamlessly
            transitioning to a Retrieval Augmented Generation (RAG) model if
            needed.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
