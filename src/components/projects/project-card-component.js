function ProjectCardComponent({ props }) {
    return (
        <div className='projects-card-container'>
            <div className='projects-card'>
                <h3 className='project-title'>
                    <a className='project-link' target='_blank' rel='noreferrer' href={props.titleLink}>
                        {props.title}
                    </a>
                </h3>
                <p className='project-description'>
                    {props.description}
                </p>
                <ul className='project-links'>
                    {
                        props.links.map(
                            (item, key) => <li key={key}><a target='_blank' rel="noreferrer" href={item.link}>{item.title}</a></li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProjectCardComponent;