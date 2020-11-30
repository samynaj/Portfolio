import ParticlesBg from 'particles-bg';
// import Slide from 'react-reveal/Slide';
import TwitterIcon from '@material-ui/icons/Twitter';
// import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './contact.scss';
import emailjs from 'emailjs-com';
// const { REACT_APP_MY_SERVICE_ID, REACT_APP_MY_TEMPLATE_ID, REACT_APP_MY_USER_ID } = process.env.;

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(
            process.env.REACT_APP_MY_SERVICE_ID, 
            process.env.REACT_APP_MY_TEMPLATE_ID, 
            e.target, 
            process.env.REACT_APP_MY_USER_ID)
            .then((result) => {
                e.target.reset();
                alert("Message Sent, Thanks will get back to you shortly", result.text);
            
            }, (error) => {
            alert("An error occurred, Please try again", error.text);
          });
      }
    return (
        <div className='root'>
            <h1>WANT TO HIRE ME</h1>
            <div className='contact'>
                <form className='contact-form' onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder='Full Name' className='contact-form-input'/>
                    <input type="email" name="user_email" placeholder='Email Address' className='contact-form-input'/>
                    <input type="text" name="subject" placeholder='Subject' className='contact-form-input'/>
                    <textarea name="message" className='contact-form-text' placeholder='Enter message here'></textarea>
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