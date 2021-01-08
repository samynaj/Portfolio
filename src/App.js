import './App.scss';
import Navbar from './components/nav/nav';
import Home from './pages/home/home';
import About from './pages/about/about';
import Testimony from './pages/testimony/testimony';
import Projects from './pages/projects/projects';
import Contact from './pages/contacts/contacts';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Projects />
      <Testimony />
      <Contact />
    </div>
  );
}

export default App;
