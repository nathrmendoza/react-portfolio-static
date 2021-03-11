import React from 'react'
import {FaGlobeAmericas} from 'react-icons/fa'
import {BiCodeBlock} from 'react-icons/bi'

const ProjectsItem = ({item}) => {
    return (
        <div className="single-project">
            <div className="inner">
                <div className="top-info">
                    <div className="tags-group">
                        {item.tags.map(tag => {
                            return <div className="tag" key={tag.id}><span className="tag-inner">{tag.name}</span></div>
                        })}
                    </div>
                    <aside style={{backgroundImage: `url(${window.location.origin + "/" + item.media[0].url}`}} className="proj-feat-img"/>
                    <div className="info">
                        <h5>{item.name}</h5>
                        <p>{item.desc}</p>
                    </div>
                </div>
                <div className="btns-wrapper">
                    <a href={item.code_link} target="_blank" rel="noreferrer">Code<BiCodeBlock /></a>
                    <a href={item.site_link} target="_blank" rel="noreferrer">Site<FaGlobeAmericas/></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectsItem
