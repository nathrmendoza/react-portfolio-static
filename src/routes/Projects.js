import React from 'react'
import {Parallax} from 'react-parallax'
import ProjectsList from '../components/Project-Components/ProjectsList'


const Projects = () => {
    let tch = new Date().getHours();
    const projectsData = [
        {
            id: 0,
            name: "Test Project",
            desc: "Lorem ipsum Description.",
            code_link : "#",
            site_link : "#",
            media : [{url: "images/projects/usashopper.png", alt: "test"}],
            tags : [{id: 0, name: "Personal"}, {id: 1, name: "Html"}]
        },
        {
            id: 0,
            name: "Test Project",
            desc: "Lorem ipsum Description.",
            code_link : "#",
            site_link : "#",
            media : [{url: "images/projects/usashopper.png", alt: "test"}],
            tags : [{id: 0, name: "Personal"}, {id: 1, name: "Html"}]
        },
        {
            id: 0,
            name: "Test Project",
            desc: "Lorem ipsum Description.",
            code_link : "#",
            site_link : "#",
            media : [{url: "images/projects/usashopper.png", alt: "test"}],
            tags : [{id: 0, name: "Personal"}, {id: 1, name: "Html"}]
        },
        {
            id: 0,
            name: "Test Project",
            desc: "Lorem ipsum Description.",
            code_link : "#",
            site_link : "#",
            media : [{url: "images/projects/usashopper.png", alt: "test"}],
            tags : [{id: 0, name: "Personal"}, {id: 1, name: "Html"}]
        },
        {
            id: 0,
            name: "Test Project",
            desc: "Lorem ipsum Description.",
            code_link : "#",
            site_link : "#",
            media : [{url: "images/projects/usashopper.png", alt: "test"}],
            tags : [{id: 0, name: "Personal"}, {id: 1, name: "Html"}]
        },
        {
            id: 0,
            name: "Test Project",
            desc: "Lorem ipsum Description.",
            code_link : "#",
            site_link : "#",
            media : [{url: "images/projects/usashopper.png", alt: "test"}],
            tags : [{id: 0, name: "Personal"}, {id: 1, name: "Html"}]
        },
        {
            id: 0,
            name: "Test Project",
            desc: "Lorem ipsum Description.",
            code_link : "#",
            site_link : "#",
            media : [{url: "images/projects/usashopper.png", alt: "test"}],
            tags : [{id: 0, name: "Personal"}, {id: 1, name: "Html"}]
        },
        {
            id: 0,
            name: "Test Project",
            desc: "Lorem ipsum Description.",
            code_link : "#",
            site_link : "#",
            media : [{url: "images/projects/usashopper.png", alt: "test"}],
            tags : [{id: 0, name: "Personal"}, {id: 1, name: "Html"}]
        },
        {
            id: 0,
            name: "Test Project",
            desc: "Lorem ipsum Description.",
            code_link : "#",
            site_link : "#",
            media : [{url: "images/projects/usashopper.png", alt: "test"}],
            tags : [{id: 0, name: "Personal"}, {id: 1, name: "Html"}]
        },
        {
            id: 0,
            name: "Test Project",
            desc: "Lorem ipsum Description.",
            code_link : "#",
            site_link : "#",
            media : [{url: "images/projects/usashopper.png", alt: "test"}],
            tags : [{id: 0, name: "Personal"}, {id: 1, name: "Html"}]
        }
    ]
    
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

    return (
        <main>
            <Parallax bgImage={bgGet()} strength={400}>
                <section className="projects-wrapper" style={pageColor()}>
                    <h1>Projects!</h1>
                    <p>I've listed below some of the projects I've made throughout my career. Go ahead, take a gander.</p>
                    <ProjectsList projects={projectsData}/>
                </section>
            </Parallax>
        </main>
    )
}

export default Projects
