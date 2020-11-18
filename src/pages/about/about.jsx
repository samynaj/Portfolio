import ParticlesBg from 'particles-bg';
import './about.scss'

const About = () => {
    return (
        <div className='root'>
            <h1>ABOUT ME</h1>
            <div className='summary'>
                <p className='sum'>I am a detail-oriented and goal-driven software engineer, having over 2 years of experience in the IT domain seeking to pursue an opportunity with a growing organization that will utilize and enhance my knowledge in software development.</p>
                        
            </div>
            <div className='education'>
                <h2>Education</h2>
                <div>
                    <h5>Abubakar Tafawa Balewa University</h5>
                    <h5>B.Tech Estate Management and valuation</h5>
                    <p>Among the top 5 best graduating students of the department, and making the Deans list with a CGPA of 4.42.</p>
                </div>
                
            </div>
            
            <ParticlesBg type='polygon' color="#000" num={5} bg='true'/>
        </div>
    )
}

export default About;