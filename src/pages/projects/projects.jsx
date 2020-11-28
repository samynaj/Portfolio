import ParticlesBg from 'particles-bg';
import './projects.scss'


const Projects = () => {
    return (
        <div className='root'>
            <h1>PROJECTS WORKED ON</h1>
            <ParticlesBg type='square' color="#000" num={10} bg='true'/>
        </div>
    )
}

export default Projects;