const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4 fixed-top">
      <a className="navbar-brand fw-bold" href="/#home">
        Vedanayaki Thangaraj
      </a>

      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
