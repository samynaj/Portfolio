import sandy from '../../resources/sandy.png'
import Tada from 'react-reveal/Tada'
import Typewriter from 'typewriter-effect';
import ParticlesBg from 'particles-bg'

import './home.scss'

const Home = () => {
    return (
        <div>
            <div className='welcome-msg'>
                <div className='welcome'>
                    <Typewriter
                        options={{
                        strings: ['Heya, my name is Samuel.', 'I am a Software Developer.', 'I build scalable digital products.', 'Hit me up for your projects or available full time roles.'],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 60
                        }}
                    />
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