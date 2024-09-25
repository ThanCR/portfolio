import './Footer.css';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">

        <section className='footer-information-section'>
          <div>
            <h3 className='footer-title'>Jonnathan Ríos</h3>
            <p className='footer-subtitle'>Full Stack developer</p>

          </div>
          <ul className='footer-nav'>
            <li><Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              duration={500}>Home</Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='skills'
                spy={true}
                smooth={true}
                duration={500}>Skills</Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                duration={500}>Projects</Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='social'
                spy={true}
                smooth={true}
                duration={500}>Social</Link>
            </li>
          </ul>

        </section>
        <span>Cartago, Costa Rica. All Rights are reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
