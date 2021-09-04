import React from 'react' ;

const Navbar = ({tch, nav_func}) => {

    const colorScheme = () => {  
        if (tch >= 0 && tch < 12) 
            return "morning";
        else if (tch >= 12 && tch < 18)
            return "afternoon";
        else
            return "evening"; 
    }

    return (
        <div className={"nav-wrapper " + colorScheme()}>
            {/* <Link to="/" className={currLoc === "/" ? "active" : ""}>Home</Link>
            <Link to="/projects" className={currLoc === "/projects" ? "active" : ""}>Projects</Link>
            <Link to="/contact-me" className={currLoc === "/contact-me" ? "active" : ""}>Contact Me</Link> */}
            <button type="button" className="nav-link" onClick={() => nav_func('.hero-start')}>Intro</button>
            <button type="button" className="nav-link" onClick={() => nav_func('.sec-background')}>Summary</button>
            <button type="button" className="nav-link" onClick={() => nav_func('.projects-wrapper')}>Projects</button>
        </div>
    )
}

export default Navbar
