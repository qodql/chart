import axios from 'axios';
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Insert = () => {
    const dispatch = useDispatch();
    const typeRef = useRef();
    const navigate = useNavigate();

    function insertData(e){
        e.preventDefault();

        let formdata = new FormData(e.target);
        formdata.append('type',typeRef.current)
        let add = Object.fromEntries(formdata);

        axios.post("http://localhost:3030/account", add);
        dispatch({type:"post", data:add})
        navigate('/')
    }

  return (
    <div className='insert-wrap'>
        <form onSubmit={insertData}>
            <div className='insert-radio'>
                <input type='button' value='수입' onClick={()=>typeRef.current='수입'}/>
                <input type='button' value='지출' onClick={()=>typeRef.current='지출'}/>
            </div>
            <div className='insert-date insert-input-box'>
                <label for='date'>날짜</label>
                <input type='date' name='date'/>
            </div>
            <div className='insert-amount insert-input-box'>
                <label for='amount'>금액</label>
                <input type='text' name='amount'/>
            </div>
            <div className='insert-msg insert-input-box'>
                <label for='insert-msg'>메세지</label>
                <textarea name='msg'></textarea>
            </div>
            <div className='insert-btn insert-input-box'>
                <input type='submit' value='추가' className='add-btn'/>
                <input type='reset' value='취소' className='cancel-btn'/>
            </div>
        </form>
    </div>
  )
}

export default Insert