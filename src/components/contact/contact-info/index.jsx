import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                If you have a good opportunity that matches my skills and experience then don't 
                hesitate to Contact me. <br/>
                I would be happy to answer any questions.
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 8917756429</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">deepak403419@gmail.com</span>
            </div>
        </div>
    );
};
export default ContactInfo;
