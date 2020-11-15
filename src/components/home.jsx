
import Tada from 'react-reveal/Tada'
import Typewriter from 'typewriter-effect';

import './home.scss'

const Home = () => {
    return (
        <div>
            <div className='welcome-msg'>
                <div className='welcome'>
                    <Typewriter
                        options={{
                        strings: ['Hi, I am Samy', 'I am a software developer', 'But my parents think I can also repair wrist watches and clock just because I can operate the computer, lol!','Some of my friends think I am a hacker, imagine!!', 'So I built this site to tell everyone what I do'],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 60
                        }}
                    />
                </div>
                <div className='image'>
                    <Tada right wait={3000}>
                        <img className='img' src='https://i.pinimg.com/originals/0e/5d/02/0e5d02c84eb60d4780ac3dfff2474851.png' alt='sandy'/>
                    </Tada>
                </div>
            </div>
            
        </div>
    )
}

export default Home;