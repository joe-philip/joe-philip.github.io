import hero from './hero.jpg'
import './style.css'

function BannerComponent() {
    return (
        <section id='banner'>
            <div className='banner-container'>
                <img id='banner' src={hero} />
            </div>
        </section>
    );
}

export default BannerComponent;