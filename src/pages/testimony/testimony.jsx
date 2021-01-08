import './testimony.scss';
import Carousel from 'react-bootstrap/Carousel';
// import background from "../../resources/background.jpg";
import BlockRevealAnimation from 'react-block-reveal-animation';



const Testimony = () => {
    
    return (
        <div id='testimony'>
            <BlockRevealAnimation duration={1.5} delay={2} color='#00c2cb'>
                <h1>Testimonials</h1>
            </BlockRevealAnimation>
            
            <div className="mycarousel">
                <Carousel>
                    <Carousel.Item interval={1000} className="citem d-flex flex-column justify-content-center align-items-center">
                        <div className="mySlide">
                            <img
                                className="image-ball"
                                src="https://previews.123rf.com/images/dolgachov/dolgachov1706/dolgachov170602644/80923115-business-people-and-technology-concept-happy-smiling-woman-in-glasses-with-laptop-computer-showing-t.jpg"
                                alt="First slide"
                            />

                            <div className="desc">
                                <h3>First Name</h3>
                                <h5>Current Company</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.</p>
                            </div>
                        </div>
                        
                    </Carousel.Item>
                    <Carousel.Item interval={1000} className="citem d-flex flex-column justify-content-center align-items-center">
                        <div className="mySlide">
                            <img
                                className="image-ball"
                                src="https://www.tek-experts.com/getmedia/a2a85a5b-5676-4f52-9a30-4fa010e4c351/Mission-(im)possible-%E2%80%93-making-people-ENJOY-calling-tech-support.jpg?width=1238&height=847&ext=.jpg"
                                alt="First slide"
                            />
                            <div className="desc">
                                <h3>Second Name</h3>
                                <h5>Current Company</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.</p>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1000} className="citem d-block flex-column justify-content-center align-items-center">
                        <div className="mySlide">
                            <img
                                className="image-ball"
                                src="https://previews.123rf.com/images/dolgachov/dolgachov1504/dolgachov150402331/38880123-technology-people-lifestyle-and-networking-concept-happy-man-with-laptop-computer-showing-thumbs-up-.jpg"
                                alt="First slide"
                            />
                            <div className="desc">
                                <h3>Third Name</h3>
                                <h5>Current Company</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.</p>
                            </div>
                        </div>
                        
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Testimony;