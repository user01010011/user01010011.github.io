// src/components/Header.js

import React from "react"; 

function Footer() {
    
    const year = new Date().getFullYear(); 

    return (
        <footer>
            <p>ⓒ {year} by Isabella Yan</p>
        </footer>

    )
}

export default Footer;