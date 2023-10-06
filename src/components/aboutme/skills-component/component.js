import './style.css'

function SkillsList(props) {
    return (
        <ul className='skills-list'>
            {
                props.data.map(
                    (skill, key) => <li key={key}>{skill}</li>
                )
            }
        </ul>
    )
}

export default SkillsList