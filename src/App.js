import './App.scss';
import Navbar from './components/nav';
import ParticlesBg from 'particles-bg';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Home from './components/home'


function App() {
  return (
    <div className="App">
      <div className='nav'>
        <Bounce duration={3000}>
          <Navbar/>
        </Bounce>
      </div>
      <Home/>
      <Slide duration={1000} bottom>
        <div className='links'>
            <span className='btn-links'>
                <MailIcon/> 
            </span>
            <span className='btn-links'>
                <TwitterIcon/> 
            </span>
            <span className='btn-links'>
                <LinkedInIcon/>
            </span>
            <span className='btn-links'>
                <GitHubIcon/>
            </span>
        </div>
      </Slide>
      <ParticlesBg type='thick' color="#000" num={25} bg='true'/>
    </div>
  );
}

export default App;
