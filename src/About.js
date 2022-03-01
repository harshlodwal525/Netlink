import React from 'react';
import web from "../src/images/img2.png";
import Common from './Common';

// const About = () => {
//     return (
//         <>
//             <Common
//                 name="Welcome to About page"
//                 imgsrc={web} 
//                 visit="/contact"
//                 btname="Contact now" />
//         </>
//     )
// }

class About extends React.Component {
    render() {
        return (
            <>
                <Common
                    name="Grow your business with"
                    imgsrc={web}
                    visit="/service"
                    btname="Get Started" />
            </>

        )
    }
}
export default About;