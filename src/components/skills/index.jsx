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
                        Proficiency in HTML, CSS, and JavaScript Familiarity
                        with front-end frameworks like React, Angular, or Vue.js
                        Knowledge of responsive design principles and techniques
                        Experience in building user interfaces that deliver an
                        exceptional user experience & Proficiency in at least
                        one back-end language, such as Python, Ruby, or
                        JavaScript Familiarity with server-side frameworks like
                        Node.js, Django, or Flask Experience in building RESTful
                        APIs and integrating with third-party services Knowledge
                        of server-side caching and performance optimization
                        techniques! Experience working with relational databases
                        like MySQL and PostgreSQL or NoSQL databases like
                        MongoDB and Cassandra Knowledge of SQL and data modeling
                        principles Experience in designing and optimizing
                        databases for performance and scalability Familiarity
                        with database administration and management tools.
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
