// src/components/AboutSection.js

import React from "react";

function AboutSection() {
    return (
        <div>
            <section id="about" className="section">
                <h1>About Me</h1>
                <h4 className="tagline">
                    A creative and curiousity-driven software engineer with analytical skills and attention to detail.
                </h4>
                <div id="innerBox">
                    <p id="bio">
                        I love building beautiful things and problem solving. I get excited about bringing
                        both the technical and visual aspects of a project to life. I'm
                        happiest when I'm learning, creating, and exploring new things. 
                    </p>
                    <p>
                        I have a Bachelor of Business Adminstration in Finance from {" "}
                        <a href="https://www.emory.edu" target="_blank" rel="noreferrer">
                            Emory University
                        </a>
                        , and completed a Full-Stack Software Engineering program from {" "}
                        <a
                            href="https://flatironschool.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Flatiron School
                        </a>
                        .
                    </p>
                    <p>
                        Things I'm passionate about: technology, AI, learning new languages, traveling, health and wellness, reading, and writing.
                        After over 10 years working as a corporate and investment banker, I started to build startups and taught myself how to code. In 2022 I completed a full-time bootcamp for full stack software develpment.
                        Since then I have worked on a few startups and built many projects and applications.
                    </p>
                    {/* <p>
                        I'm currently based in Orange County and LA. 
                    </p> */}
                    <button className="btn">
                        <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                        >
                            Click to view my resume
                        </a>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default AboutSection; 