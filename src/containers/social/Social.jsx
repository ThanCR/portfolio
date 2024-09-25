import './Social.css';
import Card from '../../components/Card/Card'
import LinkedInLogo from '../../static/linkedin-logo.png'
import GitHubLogo from '../../static/github-logo.png'
import { Element } from 'react-scroll';

function Social() {
  return (
    <div className="Social">
      <Element name='social'></Element>
      <h2>Social</h2>
      <ul>
        <Card imageURL={LinkedInLogo} title='Linked In' description='' URL='https://www.linkedin.com/in/jonnathan-rios-gomez-ab9058202/?trk=opento_sprofile_topcard' customClass='social-media card-hover'/>
        <Card imageURL={GitHubLogo} title='GitHub' description='' URL='https://github.com/ThanCR' customClass='social-media card-hover' />

      </ul>
    </div>
  );
}

export default Social;
