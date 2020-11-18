import ParticlesBg from 'particles-bg';
import Slide from 'react-reveal/Slide';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {
    return (
        <div>
            <h1>WANT TO HIRE ME</h1>
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
            <ParticlesBg type='polygon' color="#000" num={5} bg='true'/>
        </div>
    )
}

export default Contact;