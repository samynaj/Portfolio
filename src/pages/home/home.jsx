import sandy from '../../resources/sandy.png'
import Tada from 'react-reveal/Tada'
import Typewriter from 'typewriter-effect';
import ParticlesBg from 'particles-bg'

import './home.scss'

const Home = () => {
    return (
        <div>
            <div className='welcome-msg'>
                <div className='welcome-msg__left'>
                    <div className='msg-top'>
                        <h1 className='name'>Hi, I am Samuel Nnaji.</h1>
                    </div>
                    
                    <div className='welcome'>
                        <Typewriter
                            options={{
                            strings: ['A Full Stack Software Developer.', 'I build scalable digital products.'],
                            autoStart: true,
                            loop: true,
                            delay: 120,
                            deleteSpeed: 60
                            }}
                        />
                    </div>
                    <div className='msg-bottom'>
                        <p>Plug me in for your projects or any available full time roles.</p>
                    </div>
                </div>
                
                <div className='image'>
                    <Tada wait={3000} duration={3000}>
                        <img className='img' src={sandy} alt='sandy'/>
                    </Tada>
                </div>
            </div>
            <ParticlesBg type='square' color="#000" num={10} bg='true'/>
        </div>
    )
}

export default Home;