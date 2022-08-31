import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import{Provider} from 'react-redux'
import CounterReducer from './Reducers/CounterReducer';
import AddCartReducer from './Reducers/AddCartReducer';


const Store = createStore(AddCartReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
<Provider store={Store}>
<App />
</Provider>

);

