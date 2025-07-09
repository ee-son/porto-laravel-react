import React from "react";

function Footer(){
    console.log("Footer loaded");
    return (
        <footer style={{
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '10px'
        }}>
            <p>© 2025 Isan F. Hidar</p>
        </footer>
    );
}

export default Footer;
