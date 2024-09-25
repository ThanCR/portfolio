import './Projects.css';
import Card from '../../components/Card/Card'
import projectURL from '../../static/sticker-finder-project.png'
import { Element } from 'react-scroll';

function Projects() {
  return (
    <div className="Projects">
      <Element name='projects'></Element>
      <h2 className="projects-subtitle">Projects</h2>
      <ul className="project-list">
        <Card imageURL={projectURL} title='Sticker Finder' customClass='card-hover' URL='https://thanrg-sticker-finder-app.netlify.app/'/>
      </ul>
    </div>
  );
}

export default Projects;
