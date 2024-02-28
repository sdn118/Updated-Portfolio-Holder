import {Link} from "react-router-dom";


function Header () {

return (
  <header className="head">
        <section className="nav">
          <Link href="#home" className="welcome">Welcome</Link>

          <nav className="navbar">
            <Link to="#home">Home</Link>
            <Link to="https://github.com/sdn118">GitHub</Link>
            <Link to="https://www.figma.com/files/project/100878754/Team-project?fuid=1265841312311133633">Figma</Link>
            <Link to="#portfolio">Portfolio</Link>
            <Link to="#contact">Contact</Link>
          </nav>

          <div className="fas fa-bars" id="menu-btn"></div>
        </section>
      </header>
)
};

export default Header