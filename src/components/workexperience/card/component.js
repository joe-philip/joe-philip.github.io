import './style.css';

function WorkExperienceCardComponent(props) {
    const otherDataKeys = Object.keys(props.otherData);
    return (
        <div className='work-experience-card'>
            <h3 className='company-title'>
                {
                    props.link ?
                        <a className='company-link' target='_blank' rel='noreferrer' href={props.link}>
                            {props.companyTitle}
                        </a> :
                        props.companyTitle
                }
            </h3>
            {props.logo && <img src={props.logo} alt='company-logo' className='company-logo' />}
            <div className='other-data'>
                {
                    otherDataKeys.map(
                        key => <>
                            <div className='card-key'>{key}</div>
                            :&nbsp;
                            <div className='card-value'>{props.otherData[key]}</div>
                        </>
                    )
                }
            </div>
            {
                props.rolesAndResponsibilities && <>
                    Roles and Responsibilities:
                    <ul className='roles-and-responsibilites'>
                        {
                            props.rolesAndResponsibilities.map(
                                (i, index) => <li key={index}>{i}</li>
                            )
                        }
                    </ul>
                </>
            }
        </div>
    );
}

export default WorkExperienceCardComponent;