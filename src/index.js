import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { composeWithDevTools } from 'redux-devtools-extension'
// import { Provider } from 'react-redux';
// import { applyMiddleware, createStore } from 'redux'
// import reduxLogger from 'redux-logger'

// import rootReducer from '/reducers'
// import reduxThunk from 'redux-thunk'

// import App from './containers/App/App.view';

// const middleware = applyMiddleware(reduxLogger, reduxThunk);

// const store = createStore(rootReducer, {}, composeWithDevTools(middleware))

// ReactDOM.render(
//         <Browse />
//     , document.getElementById('root')
// );
ReactDOM.render(
        <App />
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// let book_footer = document.querySelector('.book-footer');
// let fixed_top_bar = document.querySelector('.fixed-top-bar');

// window.addEventListener('scroll', function() {
//     console.log(window.scrollY);
//     if(window.scrollY > 645) {
//         fixed_top_bar.classList.add('show');
//     } else {
//         fixed_top_bar.classList.remove('show');
//     }
// })

// window.addEventListener('scroll', function() {
//     console.log(window.scrollY);
//     if(window.scrollY > 520) {
//         book_footer.classList.add('show2');
//     } else {
//         book_footer.classList.remove('show2');
//     }
// })