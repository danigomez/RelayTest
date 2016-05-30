import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'

import rootReducer from '../reducers/index'

const logger = createLogger("log");

// Generating App Store, from all reducers combined
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk, logger));
}
export default configureStore;