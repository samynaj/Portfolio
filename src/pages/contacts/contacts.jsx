import Slide from 'react-reveal/Slide';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './contact.scss';
import emailjs from 'emailjs-com';
import Link from '@material-ui/core/Link';

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
        <div id='contact'>
            <Slide top duration={2000}>
                <h1>Contact Me</h1>
            </Slide>
            
            <div className='contact'>
                <form className='contact-form' onSubmit={sendEmail} autoComplete="off">
                    <input type="text" name="user_name" placeholder='Full Name' className='contact-form-input'/>
                    <input type="email" name="user_email" placeholder='Email Address' className='contact-form-input'/>
                    <input type="text" name="subject" placeholder='Subject' className='contact-form-input'/>
                    <textarea name="message" className='contact-form-text' placeholder='Enter message here'></textarea>
                    <button type='submit' className='contact-form-button'>Send Message</button>
                </form>
            </div>
            
            <div className='links'>
                <span>
                    <Link href="https://twitter.com/yoh_samynaj" >
                        <TwitterIcon size='md' className='btn-links'/> 
                    </Link>
                </span>
                <span>
                    <Link href="https://www.linkedin.com/in/samuel-nnaji/" >
                        <LinkedInIcon className='btn-links'/>
                    </Link>
                </span>
                <span>
                    <Link href="https://github.com/samynaj">
                        <GitHubIcon className='btn-links'/>
                    </Link>
                </span>
            </div>
            
            
        </div>
    )
}

export default Contact;