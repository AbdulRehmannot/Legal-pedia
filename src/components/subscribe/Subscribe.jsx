import "./subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h4>Subscribe</h4>
      <p>
        Subscribe to stay tuned for new web design and latest updtes. Let’s do
        it!
      </p>
      <div className="subscribe_input">
        <input type="email" placeholder="Enter your email address" />
        <button className="btn">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
