import './about.scss';
import Slide from 'react-reveal/Slide';
import mypics from '../../resources/samuel.jpg';
import BlockRevealAnimation from 'react-block-reveal-animation';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='main'>
            <div className='imagediv'>
                    <Slide left duration={2000}>
                        <img src={mypics} alt='my pics' className='mypics'/>
                    </Slide>
                </div>  
                <div className='left'>
                    <Slide top duration={2000}>
                        <h1>ABOUT ME</h1>
                    </Slide>
                    <Slide right duration={2000}>
                        <div className='summary'>
                            <p className='sum'>I am a detail-oriented and goal-driven software engineer, having over 3 years of experience in the IT domain seeking to pursue an opportunity with a growing organization that will utilize and enhance my knowledge in software development.</p>      
                        </div>
                    </Slide>
                    <div className='education'>
                        <BlockRevealAnimation duration={1.5} delay={2} color='#ff5757'>
                            <h2>Education</h2>
                        </BlockRevealAnimation>
                        <Slide right duration={2000}>
                            <div>
                                <h5>Abubakar Tafawa Balewa University</h5>
                                <h5>B.Tech Estate Management and valuation</h5>
                                <p>Among the top 5 best graduating students of the department, and making the Deans list with a CGPA of 4.42.</p>
                            </div>
                        </Slide> 
                    </div>
                </div>
                  
            </div>
            <div className="bottom">
                <div className="bottom-left">
                    {/* <BlockRevealAnimation duration={1.5} delay={2} color='#ff5757'> */}
                        <h2>TOOLS</h2>
                    {/* </BlockRevealAnimation> */}
                    <Slide left duration={2500}>
                        <h6>Languages</h6>
                        <p>JavaScript, Typescript </p>
                    </Slide>
                    <Slide left duration={3000}>
                        <h6>Frameworks & Libraries</h6>
                        <p>React, React Native, Nodejs, Express, Angular</p>
                    </Slide>
                    <Slide left duration={3500}>
                        <h6>Fundamentals</h6>
                        <p>Html, Css, jQuery, Bootstrap</p>
                    </Slide>
                    <Slide left duration={4000}>
                        <h6>Database</h6>
                        <p>MySQL, MongoDB, FireStore</p>
                    </Slide>
                    
                </div>
                <div className='bottom-right'>
                    <BlockRevealAnimation duration={1.5} delay={2} color='#ff5757'>
                        <h2>SKILLS</h2>
                    </BlockRevealAnimation>
                    <Slide right duration={2500}>
                        <label for='com'>Communication: </label>
                        <progress id='com' value='90' max='100'></progress>
                    </Slide>
                    <Slide right duration={3000}>
                        <label for='team'>Team Player: </label>
                        <progress id='team' value='97' max='100'></progress>
                    </Slide>
                    <Slide right duration={3500}>
                        <label for='inno'>Innovation: </label>
                        <progress id='inno' value='91' max='100'></progress>
                    </Slide>
                    <Slide right duration={4000}>
                        <label for='atd'>Attention to detail: </label>
                        <progress id='atd' value='94' max='100'></progress>
                    </Slide>
                    <Slide bottom right duration={4500}>
                        <label for='lead'>Leadership: </label>
                        <progress id='lead' value='96' max='100'></progress>
                    </Slide> 
                </div>
            </div>
            
            
        </div>
    )
}

export default About;