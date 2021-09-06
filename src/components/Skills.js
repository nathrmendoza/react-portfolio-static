import SkillsList from './Skill-Components/SkillsList'

const Skills = ({skills_data}) => {
    return (
        <div className="sec-skills">
            <div className="inner-wrapper">
                <h1>Attained Skills</h1>
                <p>I've listed below the skills which I've gained throughout the course of my career. 
                    Proficiency of each skill is based on how frequent I've applied it through projects I've handled.<br/><br/>
                    <b>High</b> : Highly familiar with language, most used on personal or professional projects.<br/>
                    <b>Medium</b> : Having good grasp of the language. Also used on personal and professional projects.<br/>
                    <b>Low</b> : Still in progress of studying the language.
                    </p>
                
                <SkillsList skill_items={skills_data}/>  
            </div>
        </div>
    )
}

export default Skills
