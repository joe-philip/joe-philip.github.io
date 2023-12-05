import { useEffect, useState } from "react";

function ProjectCardComponent({ props }) {
    const [commitData, setCommitData] = useState([])
    useEffect(() => {
        if ((props.repo_type === 2) && (props.repo_url)) {
            const urlPattern = /https?:\/\/github\.com\/(?<owner>[^\/]+)\/(?<repo>[^\/]+)/;
            const match = props.repo_url.match(urlPattern);

            if (match) {
                const { owner, repo } = match.groups;
                fetch(`https://api.github.com/repos/${owner}/${repo}/commits`).then(
                    response => response.json()
                ).then(
                    data => setCommitData(data.slice(0, 5))
                )
            }
        }
    }, [props])
    console.log(commitData)
    return (
        <div className='projects-card-container'>
            <div className='projects-card'>
                <h3 className='project-title'>
                    <a className='project-link' target='_blank' rel='noreferrer' href={props.title_link}>
                        {props.title}
                    </a>
                </h3>
                <p className='project-description'>
                    {props.description}
                </p>
                <ul className='project-links'>
                    {
                        props.links.map(
                            item => <li key={item.id}>
                                <a target='_blank' rel="noreferrer" href={item.link}>{item.label}</a>
                            </li>
                        )
                    }
                </ul>
                {
                    commitData.length !== 0 && <div>
                        <h4 className="latest-commits-title">Latest commits</h4>
                        <ul className="commits-list">
                            {commitData.map(
                                item => <li key={item.id}>
                                    <a target='_blank' rel="noreferrer" href={item.html_url}>{item.commit.message}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProjectCardComponent;