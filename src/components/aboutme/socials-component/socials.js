import './style.css';

function SocialsList(props) {
    return (
        <ul className='socials-list'>
            {
                props.data.map(
                    social => <li key={social.id}>
                        <a href={social.link} target='_blank'>
                            <ion-icon name={social.icon}></ion-icon>
                        </a>
                    </li>
                )
            }
        </ul>
    )
}

export default SocialsList;