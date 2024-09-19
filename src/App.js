import './App.css';
import NavBar from './components/navBar/NavBar'
import Header from './components/header/Header'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Social from './components/social/Social'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
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
