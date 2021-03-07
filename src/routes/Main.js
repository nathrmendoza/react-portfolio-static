import {Link} from 'react-router-dom';
import {Parallax} from 'react-parallax'
import {skillsStatic, projectsStatic} from '../Stuff'

//components
import Background from '../components/Background'
import Skills from '../components/Skills'
import ScrollToLink from '../components/ScrollToLink'
import ProjectsList from '../components/Project-Components/ProjectsList'

const Main = ({tch}) => {

    //skills values
    const skillsData = skillsStatic;
    //projects values
    const projectsData = projectsStatic;

    //greeting
    const greetMessage = () => {
        if (tch >= 0 && tch < 12) 
            return "Good Morning⛅";
        else if (tch >= 12 && tch < 18)
            return "Good Afternoon🌤️";
        else
            return "Good Evening🌙";
    }

    //theme color for page
    const pageColor = () => {
        if (tch >= 0 && tch < 12) 
            return {backgroundColor : "#244e66", color : "white"};
        else if (tch >= 12 && tch < 18)
            return {backgroundColor : "#290012", color : "white"};
        else
            return {backgroundColor : "#09141A", color : "white"};
    }

    //bacgkround for page
    const bgGet = () => {
        if (tch >= 0 && tch < 12) {
            return process.env.PUBLIC_URL + "/images/morning.jpg";
        }else if (tch >= 12 && tch < 18) {
            return process.env.PUBLIC_URL + "/images/afternoon.jpg";
        }else {
            return process.env.PUBLIC_URL + "/images/evening.jpg";
        }
    }

    //render
    return (
        <main>
            <section className="hero-start">

                <Parallax bgImage={bgGet()} strength={200}>
                    <article className="hero-content">
                        <div className="hero-content-wrap">
                            <div className="pic-wrap"><img src={process.env.PUBLIC_URL + 'images/pic-of-me.jpg'} alt="test"/></div>
                            <h2>{greetMessage()}</h2>
                            <h6>I'm Nath, A front-end web developer</h6>
                            <p>Heya, I see you're visiting my portfolio. Do check around this page to see the summary of who I am. Also, don't forget to check 
                                out my <Link to="/projects">Projects</Link> page to see what I've accomplished through the length of my field.</p>
                        </div>
                    </article>
                </Parallax>
            </section>

            <section className="page-wrapper" style={pageColor()}>
                <Background />
                
                <Skills skills_data={skillsData}/>
                
                <Parallax className="section-break" bgImage={process.env.PUBLIC_URL + bgGet()} strength={500}/>

                <div className="projects-wrapper" style={pageColor()}>
                    <h1>Projects!</h1>
                    <p>I've listed below some of the projects I've made throughout my career. Go ahead, take a gander.</p>

                    <ProjectsList projects={projectsData}/>
                </div>

            </section>
        </main>
    )

}

export default Main
