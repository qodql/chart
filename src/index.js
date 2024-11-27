import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = [];

function reducer(state = initialState, action){
   switch(action.type){
     case 'incre': return state + action.num;
     case 'get': return action.data;
     case 'post': return [...state, action.data];
   }
   return state
}

let store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>          
    <Provider store={store}> 
      <App /> 
    </Provider>   
  </React.StrictMode>
);