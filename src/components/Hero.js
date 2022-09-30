import group from "../images/group.png";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="photos">
        <img src={group} alt="photos of people collage" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
