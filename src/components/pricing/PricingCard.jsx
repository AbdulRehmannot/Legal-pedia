import { Check } from "@mui/icons-material";
import "./pricingCard.scss";
import Close from "@mui/icons-material/Close";

const PricingCard = ({ title, price, features }) => {
  return (
    <div className="pricingCard">
      <div className="pricingCard_heading">
        <p>{title}</p>
        <h3>${price}</h3>
      </div>
      <div className="pricingCard_body">
        <ul className="pricingCard_body_features">
          {features?.map((feature) => {
            if (feature.isAvaiable === true) {
              return (
                <li key={feature.feature}>
                  <Check />
                  <span>{feature.feature}</span>
                </li>
              );
            } else {
              return (
                <li className="disabled" key={feature.feature}>
                  <Close />
                  <span>{feature.feature}</span>
                </li>
              );
            }
          })}
        </ul>
        <button className="btn ">Try Now !</button>
      </div>
    </div>
  );
};

export default PricingCard;
