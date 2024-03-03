import {Link} from 'react-router-dom';
import React, {useState} from 'react';

function Header(){
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobilMenu = () => setClick(false);

  return(
    <header className='head'>
      <section className='nav'>
        <nav className='navbar'>
        <Link to= "/" className='welcome'> Welcome </Link>
        <div className='menu-icon' onClick = {handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="/" className='nav-links' onClick={closeMobilMenu}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="https://github.com/sdn118" className='nav-links' onClick={closeMobilMenu}>Github</Link>
          </li>
          <li className='nav-item'>
            <Link to="https://www.figma.com/files/project/100878754/Team-project?fuid=1265841312311133633" className='nav-links' onClick={closeMobilMenu}>Figma</Link>
          </li>
          <li className='nav-item'>
            <Link to="#portfolio" className='nav-links' onClick={closeMobilMenu}>Portfolio</Link>
          </li>
          <li className='nav-item'>
            <Link to="#contact" className='nav-links' onClick={closeMobilMenu}>Contact</Link>
          </li>
        </ul>
        </nav>
      </section>
    </header>
  )
};

export default Header;