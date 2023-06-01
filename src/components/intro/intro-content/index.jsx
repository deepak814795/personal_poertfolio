import React from "react";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Deepak Kushwaha</span>
                    </h1>
                    <p className="title">
                        <br/>
                        Unleashing the Power of Technology to Craft Captivating and Responsive Web Experiences
                    </p>
                    <CallToAction
                        text="PROJECTS"
                        action={() => {
                            scrollToSection("portfolio");
                        }}
                    />
                </div>
                <div className="right-col">
                   
                    
                    
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
