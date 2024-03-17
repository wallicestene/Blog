import HeroImage from "/HeroImage.png";
const Hero = () => {
  return (
    <div>
      <section className="hero  ">
        <div className="imgContainer relative overflow-hidden">
          <img
            src={HeroImage}
            className=" w-screen h-screen object-cover object-center absolute z-0"
            loading="lazy"
            alt="Her image"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
