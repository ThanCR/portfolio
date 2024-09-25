import './NavBar.css';
import { Element, Link } from 'react-scroll';

function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul>
          <Element name='home'></Element>
          <li className="navLink"><Link
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            duration={500}>Home</Link>
          </li>
          <li className="navLink">
            <Link
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              duration={500}>Skills</Link>
          </li>
          <li className="navLink">
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              duration={500}>Projects</Link>
          </li>
          <li className="navLink">
            <Link
              activeClass='active'
              to='social'
              spy={true}
              smooth={true}
              duration={500}>Social</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
