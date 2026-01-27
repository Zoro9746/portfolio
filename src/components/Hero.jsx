import profile from "../assets/profile.jpeg";


const Hero = () => {
  return (
    <div className=" hero-section container py-5 mt-5" id="home">
      <div className="hero-section-row row align-items-center">
        <div className="col-9">
            <h1 className="display-4">Vedanayaki Thangaraj</h1>
            <p className="lead">INFORMATION SCIENCE AND ENGINEERING</p>
            <p className="lead">Fullstack Developer (MERN)</p>

            <a href="#projects" className="btn btn-primary mt-3">
                View Projects
            </a>
        </div>
        <div className="col-3 ">
        <img
            src={profile}
            alt="Profile"
            className="profile-img"
          />

      </div>
      </div>
      
    </div>
  );
};

export default Hero;
