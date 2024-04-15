// src/components/Header.js

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { BsMedium } from "react-icons/bs";

function Header(props) {
    return (
        <header className="hero">
            <div className="ai-headshot">
                <img
                    src="https://pbs.twimg.com/profile_images/1749258962187206656/VL16ou3f_400x400.jpg"
                    className="portrait"
                    alt="portrait"
                />

            </div>
            <h1>Hi!</h1>
            <h2>I'm Isabella</h2>
            <h3>full-stack software egineer</h3>

            <div id="locationIcon">
                <ImEarth size={30} />
                <h5>
                    &nbsp;<b>Orange County, CA</b>
                </h5>
            </div>
            <div id="iconContainer">
                <a
                    href="mailto:isabella.s.yan@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="personal-icon"
                >
                    <FaEnvelope />
                </a>
                <a
                    href="https://github.com/user01010011"
                    target="_blank"
                    rel="noreferrer"
                    className="personal-icon"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/isabellayan/"
                    target="_blank"
                    rel="noreferrer"
                    className="personal-icon"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://medium.com/@user01010011"
                    target="_blank"
                    rel="noreferrer"
                    className="personal-icon"
                >
                    <BsMedium />
                </a>
            </div>

        </header>
    )
}

export default Header; 