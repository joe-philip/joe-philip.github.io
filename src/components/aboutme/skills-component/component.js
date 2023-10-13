import './style.css'

function SkillsList(props) {
    return (
        <ul className='skills-list'>
            {
                props.data.map(
                    skill => <li key={skill.id}>{skill.name}</li>
                )
            }
        </ul>
    )
}

export default SkillsList