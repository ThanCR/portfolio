import { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';
import { useEffect } from 'react';

function NavBar() {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 50){
        setIsSticky(true)
      }else{
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return() =>{
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div className={`NavBar ${isSticky ? 'sticky-nav' : ''}`}>
      <nav>
        <ul>
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
