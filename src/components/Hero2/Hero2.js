import "./hero2.css";

const Hero2 = ({title, text}) => {
  return (
    <div className="hero2">
      <div className="heading">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Hero2;
