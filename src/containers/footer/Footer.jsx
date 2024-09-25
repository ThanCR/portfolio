import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <section className='footer-information-section'>
        <div>
          <h3 className='footer-title'>Jonnathan Ríos</h3>
          <p className='footer-subtitle'>Full Stack developer</p>

        </div>
        <ul className='footer-nav'>
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Social</li>
        </ul>

      </section>
      <span>Cartago, Costa Rica. All Rights are reserved.</span>
    </div>
  );
}

export default Footer;
