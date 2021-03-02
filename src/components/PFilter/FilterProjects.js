import React from 'react'

const FilterProjects = ({tag, clickFunc}) => {
    return (
        <span className={tag.state===true ? "active tag" : "tag"} onClick={()=>{clickFunc(tag)}}>{tag.name}</span>
    )
}

export default FilterProjects
