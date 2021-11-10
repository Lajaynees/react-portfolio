import React from "react"
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className= "main-info">
                <h1>FullStack Engineer</h1>
                <Typed
                className="typed-text"
                strings={["MERN Stack", "JavaScript", "HTML", "CSS", "jQuery", "API Design", "Agile Methodology"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                 <h2>Lajaynees Ingram</h2>
                <button>
                <a href="#" className="btn-main-offer">CONTACT ME</a>
                </button>
            </div>
            
        </div>
    )
}

export default Header
