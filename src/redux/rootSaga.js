import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


let composeEnhancers = compose;

const _DEV_ = true;
if (_DEV_) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
}

export default createStore(
	reducers,
	// composeEnhancers(applyMiddleware(sagaMiddleware)),
	composeEnhancers(applyMiddleware(thunk)),

);
