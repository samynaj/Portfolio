import ParticlesBg from 'particles-bg';
import Slide from 'react-reveal/Slide'


const Experience = () => {
    return (
        <div>
            <Slide top duration={3000}>
                <h1>PROFESSIONAL EXPERIENCES</h1>
            </Slide>
            <Slide bottom duration={3000}>
                <h3>STACK</h3>
                <p>I have good working experience using JavaScript, Typescript, and a bit of the PHP programming language.</p>
                <p>Also I worked with React, Node.js, Express, Angular, jQuery, Bootstrap, Tailwind, Material UI, Next js frameworks and libraries.</p>
            </Slide>
            
            <ParticlesBg type='square' color="#000" num={10} bg='true'/>
        </div>
    )
}

export default Experience;