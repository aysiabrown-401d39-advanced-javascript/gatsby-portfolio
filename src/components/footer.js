import React from "react";

const Footer = () => {

    return (
        <footer
            style={{
            marginTop: `2rem`,
            backgroundColor: 'black',
            height: '50px', 
            color: 'white'
        }}
      >
        <center>© {new Date().getFullYear()} Aysia Brown | 425.999.0149 | aysiaebrown@gmail.com | <a href='https://linkedin.com/in/aysiaelise'>LinkedIn</a></center>
        <center><a href="https://icons8.com/icon/121198/cat-footprint">Cat Footprint icon by Icons8</a></center>
      </footer>
    )
}

export default Footer;