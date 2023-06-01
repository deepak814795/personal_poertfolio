import React from "react";
import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaStackOverflow,
    FaInstagram,
    FaMailBulk,
    FaMailchimp,
    FaVoicemail,
    FaFacebook,
    FaTwitter,
} from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const Footer = () => {
    return (
        <Section
            background="light"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="JS Dev Hindi"
                    />
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blogs & Articles
                    </li>
                    <li
                        className="footer-menu-item"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com/in/deepakkushwaha-893464152/"
                    />
                     <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/deepak814795"
                    />
                    <SocialIcon
                        color="#FF0000"
                        icon={<FaMailBulk />}
                        link="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBWVKNWVpwjFGsJnBLCDvcrDwCNSzXQJrhphgTSJXFrbTGpwmPxHZqQGtBxmkfknxrtzTj"
                    />
                    <SocialIcon
                        color="#f2740d"
                        icon={<FaTwitter/>}
                        link="https://twitter.com/Deepak6473?t=d8U088zeZ_OlxJb6QQBX9g&s=08"
                    />
                    <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://instagram.com/__dk.20?igshid=OTk0YzhjMDVlZA=="
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2023 Deepak Kushwaha | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
