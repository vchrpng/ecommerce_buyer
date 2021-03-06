import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore , applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { getAllProducts } from './actions/index';
import { userLoggedIn } from './actions/auth';

const middleware = [ thunk ];
    middleware.push(createLogger());

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
  )

store.dispatch(getAllProducts())
if(localStorage.ecommerceJWT){
    const user = { token : localStorage.ecommerceJWT }
    store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
