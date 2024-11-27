import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import List from './List';
import Chart from './Chart';

const Main = () => {

    const navigate = useNavigate();

    const goInsert= ()=>{
        navigate("/insert");
    }

  return (
    <main className='main'>
        <div className='main-date'>
            <i className='arrow-left'></i>
            <span>9월</span>
            <i className='arrow-right'></i>
        </div>
        <section className='main-property box-shadow'>
            <div className='property-status'>
                <h5>자산현황</h5>
                <p>21,458,560원</p>
            </div>
            <div className='payment-status'>
                <div className='benefit payment-box'>
                    <span>수입</span>
                    <span>3,200,000원</span>
                </div>
                <div className='payment payment-box'>
                    <span>지출</span>
                    <span>1,980,000원</span>
                </div>
            </div>
        </section>
        <section className='main-details'>
            <div className='details-tit'>
                <h4 className='sub-title'>전체내역</h4>
                <span onClick={()=>navigate('/list')}>더보기</span>
            </div>
            <div className='detail-box box-shadow'>
                <ul>
                   <List/>
                </ul>
            </div>
        </section>
        <section className='main-chart'>
            <h4 className='sub-title'>월별지출차트</h4>
            <div className='chart-box box-shadow'>
                <Chart/>
            </div>
            <div className='chart-list'>
                <ul>
                    <li>
                        <span className='chart-first'>35%</span>
                        <p>생활용품</p>
                        <p>1,600,000원</p>
                    </li>
                    <li>
                        <span className='chart-second'>32%</span>
                        <p>관광</p>
                        <p>800,000원</p>
                    </li>
                    <li>
                        <span className='chart-third'>24%</span>
                        <p>식비</p>
                        <p>1,200,000원</p>
                    </li>
                    <li>
                        <span className='chart-fourth'>12%</span>
                        <p>여가</p>
                        <p>280,000원</p>
                    </li>
                </ul>
                <button onClick={goInsert}>내역 추가</button>
            </div>
        </section>
    </main>
  )
}

export default Main