import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/file-sample_150kB.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                    I possess strong front-end and backend development skills.
                    I specialize in creating responsive web designs, ensuring cross-browser compatibility, 
                    and utilizing JavaScript frameworks like React.js and Vue.js. I am experienced in version control, 
                    performance optimization, and web accessibility.<br/>
                    Frontend : <span1>HTML</span1>,<span1>SASS</span1>, <span1>JavaScrip</span1> <span1>React JS</span1> <span1>Bootstrap</span1> <br/>
                    Backend  : <span2>Mongo DB</span2>,<span2>Express JS</span2>, <span2>Node JS</span2>,<span2>SQL</span2>,<span2>Spring Boot</span2> <br/>
                    Let's connect to discuss my skills further. <br/>
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
