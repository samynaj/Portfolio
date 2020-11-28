import ParticlesBg from 'particles-bg';
// import Slide from 'react-reveal/Slide';
import TwitterIcon from '@material-ui/icons/Twitter';
// import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './contact.scss';

const Contact = () => {
    return (
        <div className='root'>
            <h1>WANT TO HIRE ME</h1>
            <div className='contact'>
                <form action="#" method='POST' className='contact-form'>
                    <input type="text" placeholder='Full Name' className='contact-form-input'/>
                    <input type="email" placeholder='Email Address' className='contact-form-input'/>
                    <input type="text" placeholder='Subject' className='contact-form-input'/>
                    <textarea className='contact-form-text' placeholder='Enter message here'></textarea>
                    <button type='submit' name='button' className='contact-form-button'>Send Message</button>
                </form>
            </div>
            
            <div className='links'>
                <span>
                    <TwitterIcon size='md' className='btn-links'/> 
                </span>
                <span>
                    <LinkedInIcon className='btn-links'/>
                </span>
                <span>
                    <GitHubIcon className='btn-links'/>
                </span>
            </div>
            
            <ParticlesBg type='square' color="#000" num={10} bg='true'/>
        </div>
    )
}

export default Contact;