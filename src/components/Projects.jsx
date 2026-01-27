const Projects = () => {
  return (
    <div className="projects-section container py-5" id="projects">
      <h2 className="text-center mb-4">Projects</h2>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow p-3">
            <h5>PixelPass</h5>
            <p>A password Authenticator</p>

            <a
              href="https://github.com/Zoro9746/pixelpass"
              className="btn btn-outline-dark me-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <button className="btn"  id="btn">
              Live Demo
            </button>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow p-3">
            <h5>JWT Auth App</h5>
            <p>Login & Register using MERN Stack.</p>

            <a
              href="https://github.com/yourusername/jwt-auth"
              className="btn btn-outline-dark me-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <button className="btn"  id="btn">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
