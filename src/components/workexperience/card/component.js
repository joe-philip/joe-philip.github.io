import './style.css';

function generateElements(data) {
    var response = []
    for (const key in data) {
        response.push(<><div className='card-key'>{key}</div>:<div className='card-value'>{data[key]}</div></>)
    }
    return (<div className='other-data'>{response.map((i, index) => <>{i}</>)}</div>);
}

function WorkExperienceCardComponent(props) {
    return (
        <div className='work-experience-card'>
            <h3 className='company-title'>
                {
                    props.link ?
                        <a className='company-link' target='_blank' rel='noreferrer' href={props.link}>{props.companyTitle}</a> :
                        props.companyTitle
                }
            </h3>
            {props.logo && <img src={props.logo} alt='company-logo' className='company-logo' />}
            {generateElements(props.otherData)}
            {
                props.rolesAndResponsibilities && <>
                    Roles and Responsibilities:
                    <ul className='roles-and-responsibilites'>
                        {props.rolesAndResponsibilities.map((i, index) => <li key={index}>{i}</li>)}
                    </ul>
                </>
            }
        </div>
    );
}

export default WorkExperienceCardComponent;