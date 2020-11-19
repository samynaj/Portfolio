import ParticlesBg from 'particles-bg';
import './about.scss';
import Slide from 'react-reveal/Slide';
import mypics from '../../resources/mypics.jpg'

const About = () => {
    return (
        <div className='root'>
            <div className='main'>
                <div className='left'>
                    <Slide top duration={3000}>
                        <h1>ABOUT ME</h1>
                    </Slide>
                    <Slide right duration={3000}>
                        <div className='summary'>
                            <p className='sum'>I am a detail-oriented and goal-driven software engineer, having over 2 years of experience in the IT domain seeking to pursue an opportunity with a growing organization that will utilize and enhance my knowledge in software development.</p>      
                        </div>
                    </Slide>
                    <div className='education'>
                        <Slide top duration={3000}>
                            <h2>Education</h2>
                        </Slide>
                        <Slide right duration={3000}>
                            <div>
                                <h5>Abubakar Tafawa Balewa University</h5>
                                <h5>B.Tech Estate Management and valuation</h5>
                                <p>Among the top 5 best graduating students of the department, and making the Deans list with a CGPA of 4.42.</p>
                            </div>
                        </Slide> 
                    </div>
                </div>
                <div className='imagediv'>
                    <Slide right duration={3000}>
                        <img src={mypics} alt='my pics' className='mypics'/>
                    </Slide>
                </div>    
            </div>
            <div className='bottom'>
                <h2>SKILLS</h2>
                <label for='com'>Communication: </label>
                <progress id='com' value='85' max='100'></progress>
                <label for='team'>Team Player: </label>
                <progress id='team' value='83' max='100'></progress>
            </div>
            <ParticlesBg type='square' color="#00" num={10} bg='true'/>
        </div>
    )
}

export default About;