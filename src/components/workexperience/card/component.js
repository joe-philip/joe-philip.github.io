import './style.css';

function WorkExperienceCardComponent(props) {
    return (
        <div className='work-experience-card'>
            <h3 className='company-title'>
                {
                    props.experienceData.company_url ?
                        <a className='company-link' target='_blank' rel='noreferrer' href={props.experienceData.company_url}>
                            {props.experienceData.title}
                        </a> :
                        props.experienceData.title
                }
            </h3>
            {props.experienceData.logo && <img src={props.experienceData.logo} alt='company-logo' className='company-logo' />}
            <div className='other-data'>
                {
                    props.experienceData.work_experience_additional_data.map(
                        obj => <>
                            <div className='card-key'>{obj.key}</div>
                            :&nbsp;
                            <div className='card-value'>{obj.value}</div>
                        </>
                    )
                }
            </div>
            {
                props.experienceData.work_experience_roles_and_responsibilities && <>
                    Roles and Responsibilities:
                    <ul className='roles-and-responsibilites'>
                        {
                            props.experienceData.work_experience_roles_and_responsibilities.map(
                                i => <li key={i.id}>{i.label}</li>
                            )
                        }
                    </ul>
                </>
            }
        </div>
    );
}

export default WorkExperienceCardComponent;