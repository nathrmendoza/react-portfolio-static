import React from 'react'

const SkillsItem = ({skill}) => {
    return (
        <div className="skill-item">
            <div className="inner-skill-wrap">
                <img src={process.env.PUBLIC_URL + skill.image.url} alt="test"/>
                <h3>{skill.name}</h3>
                <span className="proficiency"><em>{skill.skill_proficiency.name}</em></span>
            </div>
        </div>
    )
}

export default SkillsItem
