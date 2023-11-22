import { createStore } from 'redux';
import reducer from './reducers/index';

export const store = createStore(reducer); // rootReducer will be a combination of your reducers
