import React, {useState} from 'react'
import {Parallax} from 'react-parallax'

import {projectsStatic, tagsStatic} from '../Stuff'
import ProjectsList from '../components/Project-Components/ProjectsList'
import FilterList from '../components/PFilter/FilterList'

const Projects = () => {
    let tch = new Date().getHours();
    //projects values
    const [projectsData, setProjects] = useState(projectsStatic);
    //tags values
    const [tagsData, setTags] = useState(tagsStatic);

    //already filtered values
    const [filtered,setFiltered] = useState([]);

    //filter queue
    const [filterQue, setFQue] = useState([]);


    //filter function
    const filterProjects = tofilter => {
        let newfilter = [];
        let toQueue = filterQue;
        let newtags = tagsData;

        //reset filters
        if (tofilter === "Reset") {
            //resets all values
            console.log("resets");
            setFiltered([]);
            setTags(tagsStatic);
            setProjects(projectsStatic);
        }

        //do filter
        else {
            // first pass
            if (filtered.length === 0) {
                projectsData.map(proj => {
                    return proj.tags.map(tag => {
                        if (tag.name === tofilter.name) {
                            newfilter.push(proj);
                        }
                        return tag;
                    });
                });
                setFiltered(newfilter);
            }
            //if already passed
            else {
                if(tofilter.state === false) {
                    filtered.map(proj => {
                        return proj.tags.map(tag => {
                            if (tag.name === tofilter.name){
                                newfilter.push(proj);
                            }
                            return tag;
                        })
                    });
                    toQueue.push(tofilter);
                    setFQue(toQueue);
                }
                // if filter already triggered
                else {
                    toQueue.filter(filter => {
                        return filter.name !== tofilter.name;
                    });
                    
                    //reset filtered
                    setFiltered(projectsStatic);

                    toQueue.map(filter=>{
                        return filtered.map(val =>{
                            return val.tags.map(tag => {
                                if (tag.name === filter.name) {
                                    newfilter.push(val);
                                }
                                return tag;
                            });
                        });
                    })

                    setFQue(toQueue);
                }
                
                //set values for filtered
                setFiltered(newfilter);
            }
            
            //set state of tag/filter
            newtags.map(tag=>{
                if(tag.name === tofilter.name) 
                    tag.state = !tag.state;
                return tag;
            });
            
            setTags(newtags);
            setProjects(newfilter);
        }

        
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

    return (
        <main>
            <Parallax bgImage={bgGet()} strength={400}>
                <section className="projects-wrapper" style={pageColor()}>
                    <h1>Projects!</h1>
                    <p>I've listed below some of the projects I've made throughout my career. Go ahead, take a gander. <br>
                        <em>Side note: I've not included the code links for professional projects as this might break some security protocols.</em></br></p>
                    
                    <FilterList tags={tagsData} doFilter={filterProjects}/>

                    <ProjectsList projects={projectsData}/>
                </section>
            </Parallax>
        </main>
    )
}

export default Projects
