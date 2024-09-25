import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <h1>Jonnathan Ríos</h1>
      <p>Full Stack Developer</p>
      <Link 
        activeClass='active' 
        to='skills'
        spy={true}
        smooth={true}
        duration={500}><button>Continue</button></Link>
    </div>
  );
}

export default Header;
