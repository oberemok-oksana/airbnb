import logo from "../images/vector.svg";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#">
            <img src={logo} alt="logo airbnb" className="logo-img" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
