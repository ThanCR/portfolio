import './Skills.css';
import Card from '../../components/Card/Card'
import NodeJSLogo from '../../static/node-icon.png'
import HTMLLogo from '../../static/html-logo.png'
import CSSLogo from '../../static/css-logo.svg'
import JSLogo from '../../static/js-logo.svg'
import ReactLogo from '../../static/react-logo.png'
import MSServerLogo from '../../static/mss-logo.svg'
import MongoLogo from '../../static/mongo-logo.svg'
import GitLogo from '../../static/git-logo.png'
import AzureLogo from '../../static/azure-logo.png'

function Skills() {
  return (
    <div className="Skills">
      <h2>Skills</h2>
      <section className='skills-list'>
        <Card imageURL={HTMLLogo} title='HTML' description='Proficient in structuring web content using HTML, ensuring semantic, accessible, and responsive page layouts.' />
        <Card imageURL={CSSLogo} title='CSS' description='Skilled in designing responsive and visually appealing web pages with CSS, using Flexbox, Grid, and animations.' />
        <Card imageURL={JSLogo} title='JavaScript' description='Capable of developing dynamic web features using JavaScript, with expertise in ES6+ and DOM manipulation.' />
        <Card imageURL={ReactLogo} title='ReactJS' description='Experienced in creating efficient, reusable components and managing state in complex user interfaces using React.' />
        <Card imageURL={NodeJSLogo} title='NodeJS' description='Experienced in building scalable server-side applications with NodeJS, handling asynchronous operations and RESTful APIs.' />
        <Card imageURL={MSServerLogo} title='SQL Server' description='Proficient in Microsoft SQL Server, skilled in schema design, complex queries, and performance optimization.' />
        <Card imageURL={MongoLogo} title='MongoDB' description='Skilled in MongoDB, managing unstructured data, creating schemas, and implementing CRUD operations for scalability.' />
        <Card imageURL={GitLogo} title='Git' description='Proficient in Git, experienced in version control, branch management, and collaborative workflows with Git repositories.' />
        <Card imageURL={AzureLogo} title='Azure Cloud' description='Proficient in Microsoft Azure, skilled in deploying cloud services and implementing scalable solutions.' />
      </section>
    </div>
  );
}

export default Skills;
