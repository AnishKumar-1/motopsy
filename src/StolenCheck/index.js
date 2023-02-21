import React, { memo } from 'react'
import './style.css';
import { MdOutlineRestorePage } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';

import img from '../images/5.png';


function StolenCheck() {
    return (
        <>
            {/* <MdOutlineRestorePage className='icon' /> */}
            <div className='totalLoss-main'>
                <div className='top-text'><p>“Volvo Group India PVT LTD” Volvo S-60 D3 2.0L, 2012</p></div>
                <div className='sub-text'>
                    <div className='one first'>
                    <img src={img} style={{ filter: "invert(100%)" }} className="image" alt='stolen-image' />
                    </div>
                    <div className='one second'><h1>Stolen Check</h1>
                        <p>MOTOPSY checks for reported theft or crime
                            for a given vehicle with National Crime Report
                            Bureau of India
                        </p>
                    </div>
                    <div className='one third'><FaLongArrowAltRight className='icon2' /></div>
                    <div className='one four'>

                        <div className='hide-circle'></div>
                        <div className='text-content'> <p>NOC attached for this
                            vehicle being clean , issued
                            by NCRB</p></div>
                        <div className='main-circle'>
                            <ImCheckmark className='mark-icon' />
                        </div>
                        <div className='right'>

                        </div>

                    </div>
                </div>
                <div className='stolen-last-data'>
                    <p className='first'>The NCRB, a government agency in India, collects and analyzes criminal data as outlined in the Indian Penal Code and Special and Local
                        Laws. The most exciting aspect of this agency, as reported by NCRB, is the ability to search a national database using a registration
                        number, chassis number, engine number, type, make, model, or any combination of these parameters.</p>
                    <p>*NCRB Vehicle NOC ascertains the status of a vehicle before its purchase, as to whether it is involved in any crime or a stolen vehicle. MOTOPSY validates Stolen status of a vehicle
                        with NCRB Database</p>
                </div>

            </div>
        </>
    )
}

export default memo(StolenCheck)
