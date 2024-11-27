import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector, useReducer } from 'react-redux';
import './App.css';
import './css/main.scss';
import axios from 'axios';
import { useEffect } from 'react';
import Main from './page/Main';
import List from './page/List';
import Insert from './page/Insert';


function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(()=>{
    axios.get('http://localhost:3030/account')
    .then(res=>{
      dispatch({type:"get", data:res.data})
    })
  },[])
  
  if(!state.length)return<>준비중..</>
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/insert' element={<Insert dispatch={dispatch}/>}></Route>
      </Routes>
    </Router>
  );
}

 {/* <p>{state}</p>
      <button onClick={()=>dispatch({type:'incre',num:10})}>증가</button> */}

export default App;
