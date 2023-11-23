import { useDispatch } from 'react-redux';
import { toggleRefreshAction } from '../../redux/actions/toggleTheme';
import './style.css';

function RefreshPageComponent() {
    const dispatch = useDispatch()

    return (
        <div id="refresh">
            <button onClick={() => dispatch(toggleRefreshAction())}>
                <ion-icon name="reload"></ion-icon>
            </button>
        </div>
    )
}

export default RefreshPageComponent;