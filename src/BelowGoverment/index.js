import React, { memo } from 'react'
import './style.css';
import { ImCheckmark } from 'react-icons/im';
import { ImCross } from 'react-icons/im';



function BelowGoverment() {
  return (
    <div className='belowGoverment'>
      <div className='h1-container'><h1>Stolen Status Check</h1></div>
      <div className='three-div'>
        <div className='card-container one'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>NOC attached for this<br />
                vehicle being clean , issued
                by NCRB</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle'>
              <ImCheckmark className='icon' />
            </div>
          </div>
        </div>
        <div className='card-container two'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>ALERT! Vehicle reported<br />
                Stolen or involved in Crime
                in India</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle' style={{ background: "red" }}>
              <ImCross className='icon' />
            </div>
          </div>
        </div>
        <div className='card-container three'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>Information not available,<br /> in
                person/offline verification<br />
                needed with NCRB</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle' style={{ background: "orange" }}>
              <ImCheckmark className='icon' />
            </div>
          </div>
        </div>
      </div>
      {/* second section  start ................................................................. */}
      <div className='h1-container'><h1>Blacklist Check</h1></div>
      <div className='three-div'>
        <div className='card-container four'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>Vehicle is not blacklisted</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle'>
              <ImCheckmark className='icon' />
            </div>
          </div>
        </div>
        <div className='card-container five'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>ALERT! Vehicle reported<br />
                Blacklist, seek details with<br />
                respective RTO</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle' style={{ background: "red" }}>
              <ImCross className='icon' />
            </div>
          </div>
        </div>
        <div className='card-container six'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>Information not available, in<br />
                person/offline verification<br />
                needed with respective RTO</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle' style={{ background: "orange" }}>
              <ImCheckmark className='icon' />
            </div>
          </div>
        </div>
      </div>
      {/* third section  start ................................................................. */}
      <div className='h1-container seven'><h1>Finance Check</h1></div>
      <div className='three-div'>
        <div className='card-container'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>Vehicle is not Hypothicated/
                Financed</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle'>
              <ImCheckmark className='icon' />
            </div>
          </div>
        </div>
        <div className='card-container eight'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>ALERT! Vehicle's RC is<br />
                hypothicated, seek NOC<br />
                from financer before<br />
                purchase of vehicle</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle' style={{ background: "red" }}>
              <ImCross className='icon' />
            </div>
          </div>
        </div>
        <div className='card-container nine'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>Information not available, in<br />
                person/offline verification<br />
                needed with respective RTO</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle' style={{ background: "orange" }}>
              <ImCheckmark className='icon' />
            </div>
          </div>
        </div>
      </div>

      {/* fourth section  start ................................................................. */}
      <div className='h1-container eleven'><h1>Odometer Mileage Accuracy Check</h1></div>
      <div className='three-div'>
        <div className='card-container'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>Vehicle has clean and<br />
                consitent Mileage reported<br />
                throughout its life-cycle</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle'>
              <ImCheckmark className='icon' />
            </div>
          </div>
        </div>
        <div className='card-container 12th'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>ALERT! Vehicle's Mileage<br />
                trend is eratic, possibility of<br />
                rollback</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle' style={{ background: "red" }}>
              <ImCross className='icon' />
            </div>
          </div>
        </div>
        <div className='card-container 13th'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>Information available is not<br />
                sufficient to conclude,<br />
                please have vehicle<br />
                physically examined</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle' style={{ background: "orange" }}>
              <ImCheckmark className='icon' />
            </div>
          </div>
        </div>
      </div>

      {/* fifth section  start ................................................................. */}
      <div className='h1-container 14th'><h1>Total Loss/ Written off Check</h1></div>
      <div className='three-div'>
        <div className='card-container'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>Vehicle has never been<br />
                reported Total Loss/ Written,<br />
                off due to accident</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle'>
              <ImCheckmark className='icon' />
            </div>
          </div>
        </div>
        <div className='card-container 15th'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>ALERT! Vehicle has been<br />
                reported Total Loss/Written<br />
                Off, can have issues in long<br />
                run</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle' style={{ background: "red" }}>
              <ImCross className='icon' />
            </div>
          </div>
        </div>
        <div className='card-container 16th'>
          <div className='card-inside-main'>
            <div className='text-container'>
              <p>Information available is not<br/>
                sufficient to conclude,<br/>
                please have vehicle<br/>
                physically examined</p>
            </div>
            <div className='out-line-hide'></div>
            <div className='circle' style={{ background: "orange" }}>
              <ImCheckmark className='icon' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default memo(BelowGoverment)