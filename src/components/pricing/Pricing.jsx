import SectionHeading from "../sectionHeading/SectionHeading";
import PricingCard from "./PricingCard";
import "./pricing.scss";

const Pricing = () => {
  return (
    <div className="container py-5 pricing">
      <SectionHeading heading="Pricing" />

      <div className="pricing_body">
        <div className="row gy-5">
          <div className="col-12 col-md-4 col-lg-4 feature">
            <PricingCard
              title="free"
              price={0}
              features={[
                { feature: "PNG templates", isAvaiable: true },
                { feature: "Figma responsive components", isAvaiable: false },
                { feature: "Constant updates", isAvaiable: false },
                { feature: "Custom templates", isAvaiable: false },
              ]}
            />
          </div>
          <div className="col-12 col-md-4 col-lg-4 feature">
            <PricingCard
              title="Premium"
              price={99}
              features={[
                { feature: "PNG templates", isAvaiable: true },
                { feature: "Figma responsive components", isAvaiable: true },
                { feature: "Constant updates", isAvaiable: false },
                { feature: "Custom templates", isAvaiable: false },
              ]}
            />
          </div>
          <div className="col-12 col-md-4 col-lg-4 feature">
            <PricingCard
              title="Pro"
              price={199}
              features={[
                { feature: "PNG templates", isAvaiable: true },
                { feature: "Figma responsive components", isAvaiable: true },
                { feature: "Constant updates", isAvaiable: true },
                { feature: "Custom templates", isAvaiable: true },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
