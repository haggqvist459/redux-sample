import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState, 
    composeWithDevTools(applyMiddleware())
);

store.subscribe(throttle(
    () => {
        saveState({
            items: store.getState().items
        });
    }
), 1000);

export default store;