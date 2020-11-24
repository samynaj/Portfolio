import ParticlesBg from 'particles-bg';
import Slide from 'react-reveal/Slide';
import './experience.scss';
import JavaScript from '../../resources/javaScript.png';
import Typescript from '../../resources/typescript.png';
import React from '../../resources/react.png';
import Node from '../../resources/node.png';
import html from '../../resources/html.png';
import css from '../../resources/css.png';
import jquery from '../../resources/jquery.png';
import bootstrap from '../../resources/bootstrap.png';
import angular from '../../resources/angularjs.jpg';
import php from '../../resources/php.png';
import redux from '../../resources/redux.png';
import next from '../../resources/nextJs.jpg';
import firebase from '../../resources/firebase.png';
import figma from '../../resources/figma.png';


const Experience = () => {
    const pics = [JavaScript, Typescript, php, React, angular, redux, Node, next, html, css, jquery, bootstrap, firebase, figma];
    return (
        <div className='root'>
            <Slide top duration={3000}>
                <h1>PROFESSIONAL EXPERIENCES</h1>
            </Slide>
            <Slide bottom duration={3000}>
                <h3>My Stacks</h3>
            </Slide>
            <p>I have good working experience using JavaScript, Typescript, and a bit of the PHP programming language.</p>
            <p>Also I work with React, Node.js, Express, Angular, jQuery, Bootstrap, Tailwind, Material UI, Next js frameworks and libraries.</p>
            <div className='stack'>
                {
                    pics.map(pic => {
                        return (
                            <Slide right duration={3000}>
                                <div className='stack-div'>
                                    <img src={pic} alt="stacks" className='stack-div-img'/>
                                </div>
                            </Slide>
                        )
                    })
                }
            </div>
            <ParticlesBg type='square' color="#000" num={10} bg='true'/>
        </div>
    )
}

export default Experience;