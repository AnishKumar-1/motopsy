import React, { memo } from 'react'
import './style.css';
import { MdOutlineRestorePage } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';
import img1 from '../images/Section 4/1.png';
function TotalLoss() {
  return (
    <div className='totalLoss-main'>
      <div className='top-text'><p>“Volvo Group India PVT LTD” Volvo S-60 D3 2.0L, 2012</p></div>
      <div className='sub-text'>
        <div className='one first' style={{filter: "invert(100%)"}}><img src={img1} /></div>
        <div className='one second'><h1>Total Loss/ Written off Check</h1>
          <p>MOTOPSY checks for Vehicles being written  off due to accident
            off by Insurance companies and auctioned to
            scrap buyers</p>
        </div>
        <div className='one third'><FaLongArrowAltRight className='icon2' /></div>
        <div className='one four'>
     
          <div className='hide-circle'></div>
          <div className='text-content'> <p>Vehicle has never been
            reported Total Loss/ Written off due to accident</p></div>
          <div className='main-circle'>
            <ImCheckmark className='mark-icon' />
          </div>
          <div className='right'>

          </div>

        </div>
      </div>

    </div>
  )
}

export default memo(TotalLoss)
