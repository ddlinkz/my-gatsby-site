import React from 'react'

const Footer = () => (
    <div style={style.div}>
        <div>
            <a 
              href="https://www.instagram.com/ddlinkz"
              rel="noopener noreferrer"
              target="_blank"
            >
                Instagram
            </a>
        </div>
        <div>
            Linkedin
        </div>
        <div>
            Github
        </div>
    </div>
)

const style = {}

style.div = {
    display: "flex",
    justifyContent: "space-evenly",
    position: "absolute",
    width: "100%",
    bottom: "2%",
    verticalAlign: "bottom",
    fontSize: "10",
    color: "#FFF",
}

export default Footer
