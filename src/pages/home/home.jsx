import BlockRevealAnimation from 'react-block-reveal-animation';
import Typewriter from 'typewriter-effect';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import resume from '../../resources/resume.pdf';

import './home.scss'

const Home = () => {
    return (
        <div id='home' className='welcome-msg'>
            <div className='welcome-msg__left'>
                <div className='msg-top'>
                    <BlockRevealAnimation duration={1.5} delay={2} color='#00c2cb'>
                        <h1 className='name'>SAMUEL NNAJI</h1>
                    </BlockRevealAnimation>
                    
                </div>
                
                <div className='welcome'>
                    <Typewriter
                        options={{
                        strings: ['I am a Full Stack Software Developer.', 'I build scalable digital products.'],
                        autoStart: true,
                        loop: true,
                        delay: 120,
                        deleteSpeed: 60
                        }}
                    />
                </div>
                <div className='msg-bottom'>
                    <Bounce duration={3000}>
                        <p>SOFTWARE DEVELOPER & TECHNICAL WRITER</p>
                    </Bounce>
                    
                </div>
            </div>
            <div className="bottom-nav">
                <a href={resume} target='_blank' rel='noreferrer'>
                    <Slide left duration={3000}>
                        <button className='download'>Download Resume</button>
                    </Slide>
                </a>
                <a href='https://samynaj.hashnode.dev/' target='_blank' rel='noreferrer'>
                    <Slide right duration={3000}>
                        <button className='blog'>Blog</button>
                    </Slide>
                </a>
            </div>
        </div>
    
    )
}

export default Home;