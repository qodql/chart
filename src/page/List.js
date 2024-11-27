import React from 'react'
import { useSelector } from 'react-redux';

const List = () => {
    const state = useSelector((state) => state);
    console.log(state);

    let itemLi = state.map((v)=>{
        return <li key={v.id}>
                    <sapn className='detail-date'>{v.date}</sapn>
                    <sapn className='detail-trade'>{v.msg}</sapn>
                    <sapn className='detail-price'>{v.amount}</sapn>
                </li>
    })

  return (
    <ul>
        {itemLi}
    </ul>
  )
}

export default List