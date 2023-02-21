import React, { memo } from 'react'
import './style.css';
import img1 from '../images/5.png';
import img2 from '../images/6.png';
import img3 from '../images/7.png';
import img4 from '../images/8.png';
import { ImCheckmark } from 'react-icons/im';
import { ImMinus } from 'react-icons/im';
import { ImCross } from 'react-icons/im';
import logo from '../images/logo.png';
function First_section_last() {
  return (
    <div className='first_section_last_top_container'>
      <div className='first_section_last_sub'>
        <div className='motospy-text motopsy-text2'>
          {/* <h1>Motopsy</h1>
          <p>vehicle history report</p> */}
          <img src={logo} width="400px" height="90px" />

        </div>
        <div className='one data' style={{ marginBottom: "56px" }}>
          <div className='image-container img-con-one' style={{ height: "133px" }}>
            <img src={img1} className="img1" />
            <span className='icon'><ImCheckmark style={{ color: "white", fontSize: "30px" }} /></span>
          </div>
          <h1>Stolen Status<br />
            Checked </h1>
          <p> NOC attached
            for this vehicle
            being clean ,
            issued by NCRB</p>
        </div>
        <div className='one data'>
          <div className='image-container img-con-two'><img src={img2} className="img1" />
            <span className='icon'><ImCheckmark style={{ color: "white", fontSize: "30px" }} /></span>
          </div>
          <h1>Blacklist Status
            Checked</h1>
          <p>NOC attached
            for this vehicle
            being clean , provided ny NCRB</p>
        </div>
        <div className='one data'>
          <div className='image-container img-con-three'><img src={img3} className="img1" />
            <span className='icon' style={{ backgroundColor: "yellow" }}><ImMinus style={{ color: "black", fontSize: "30px" }} /></span>
          </div>
          <h1>Financial Status
            Checked </h1>
          <p> Information not
            available, in person/offline verification needed
            with respective
            RTO</p>
        </div>
        <div className='one data'>
          <div className='image-container img-con-four'><img src={img4} className="img1" />
            <span className='icon' style={{ backgroundColor: "red" }}><ImCross style={{ color: "white", fontSize: "25px" }} /></span>
          </div>
          <h1>Odometer Status

            Checked </h1>
          <p> ALERT! Vehicle's
            Mileage trend is
            inconsistent,
            possibility of rollback</p>
        </div>
        {/* style={{marginTop:"85px"}} */}
        <div className='one data data-last' >
          <div className='image-container img-con-five' style={{ height: "120px" }}><img src={img1} className="img1" />
            <span className='icon' style={{ backgroundColor: "red" }}><ImCross style={{ color: "white", fontSize: "25px" }} /></span>
          </div>
          <h1>Vehicle
            Registered
            Checked </h1>
          <p> ALERT! Vehicle
            has <br /> been reported Total<br />
            Loss/Written Off,
            can have issues
            in long run</p>
        </div>

      </div>
    </div>
  )
}

export default memo(First_section_last)
