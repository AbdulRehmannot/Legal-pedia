import SectionHeading from "../sectionHeading/SectionHeading";
import FeatureCard from "./FeatureCard";
import "./features.scss";

const Features = () => {
  return (
    <div className="container-fluid py-5 features">
      <div className="container">
        <SectionHeading heading="Features" />
        <div className="features_body row g-4">
          <div className="col-12 col-lg-4 col-md-4">
            <FeatureCard />
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <FeatureCard />
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <FeatureCard />
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <FeatureCard />
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <FeatureCard />
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <FeatureCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
