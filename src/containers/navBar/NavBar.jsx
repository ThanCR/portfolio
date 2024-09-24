import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li className="navLink">Home</li>
          <li className="navLink">Skills</li>
          <li className="navLink">Projects</li>
          <li className="navLink">Social</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
