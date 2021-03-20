import './App.scss';
import NavBar from './NavBar';
// import Scene from './Scene';
import AboutMe from './AboutMe';
import Projects from './Projects';
// import Contact from './Contact';

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <AboutMe />
        <Projects />
        {/* <Contact /> */} 
      </div>
    </>
  );
}

export default App;
