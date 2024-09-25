import './App.css';
import NavBar from './containers/navBar/NavBar'
import Header from './containers/header/Header'
import Skills from './containers/skills/Skills'
import Projects from './containers/projects/Projects'
import Social from './containers/social/Social'
import Footer from './containers/footer/Footer'
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Element name='home'></Element>
      <NavBar/>
      <Header/>
      <Skills/>
      <Projects/>
      <Social/>
      <Footer/>
    </div>
  );
}

export default App;
