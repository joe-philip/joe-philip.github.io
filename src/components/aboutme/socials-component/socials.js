import './style.css';

function SocialsList(props) {
    return (
        <ul className='socials-list'>
            {
                props.data.map(
                    (social, key) => <li key={key}>
                        <a href={social.link}>
                            <ion-icon name={social.icon}></ion-icon>
                        </a>
                    </li>
                )
            }
        </ul>
    )
}

export default SocialsList;