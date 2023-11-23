import { useDispatch } from 'react-redux';
import './style.css'
import { toggleRefreshAction } from '../../redux/actions/toggleTheme';

function RefreshPageComponent() {
    const dispatch = useDispatch()

    return (
        <div id="refresh">
            <a href='#' onClick={() => { dispatch(toggleRefreshAction()) }}>
                <ion-icon name="reload"></ion-icon>
            </a>
        </div>
    )
}

export default RefreshPageComponent;