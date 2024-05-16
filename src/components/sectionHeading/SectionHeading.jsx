import "./sectionHeading.scss";

const SectionHeading = ({ heading, desc }) => {
  return (
    <div className="section_heading mb-5">
      <h2 className="text-center">{heading}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default SectionHeading;
