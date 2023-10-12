import './style.css';

function BannerComponent(props) {
    return (
        <section id='banner'>
            <div className='banner-container'>
                <img id='banner' src={props.data} alt='banner-img' />
            </div>
        </section>
    );
}

export default BannerComponent;