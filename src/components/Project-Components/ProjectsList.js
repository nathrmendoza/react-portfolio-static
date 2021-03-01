import React from 'react'
import ProjectItem from './ProjectsItem';

const ProjectsList = ({projects}) => {
    return (
        <div className="projects-list">
            {projects.map(project => <ProjectItem item={project} key={project.id}/>)}
        </div>
    )
}

export default ProjectsList
