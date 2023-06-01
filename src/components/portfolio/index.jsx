import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Streaming Platform",
        tags: ["mern", "backend","frontend"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.png"),
        },
        link: <a href="https://6478e0284389b43e283a81b9--zingy-macaron-ebb04e.netlify.app/">SHOW LIVE</a>
    },
    {
        id: 2,
        name: "Real time Code Editor",
        tags: ["frontend"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.png"),
        },
        link: <a href="https://64749890cc503575546b2116--funny-tulumba-14e996.netlify.app/">SHOW LIVE</a>
    },
    {
        id: 3,
        name: "Real time Weather App",
        tags: ["webpage","frontend"],
        media: {
            thumbnail: require("../../images/portfolio/weather1.jpg"),
        },
        link: <a href="https://www.google.com/">SHOW LIVE</a>
    },
    {
        id: 4,
        name: "Blog Application",
        tags: ["all", "mern", "backend"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.jpg"),
        },
        link: <a href="https://www.google.com/">SHOW LIVE</a>
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};
export default Portfolio;
