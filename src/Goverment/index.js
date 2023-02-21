import React, { memo } from 'react'
import './style.css';
function Goverment() {
    return (
        <div className='goverment-main'>
            <div className='top-text'>
                <h1>Government of India Ministry of<br />
                    Home Affairs National Crime<br />
                    Records Bureau</h1>
            </div>
            <div className='two-div-container'>
                <div className='left'>
                    <h1>goverment logo</h1>
                </div>
                <div className='right'>
                    <h2>National Highway -8, Service<br />
                        Road, Mahipalpur,<br />
                        New Delhi-110037</h2>
                    <p> <strong>Dated</strong> : 29/12/2022<br />
                        <strong>Reference</strong> 29122022142404/1C</p>
                </div>
            </div>
            <div className='table-container'>
                <h2>Vehicle Enquiry Report<br />
                    Only for Information for General Public<br />
                    (Not Valid for Insurance Claims/Any other Legal Purpose</h2>
                <br />
            
           
                <div className='table-data'>
                <h2>Reference enquiry received from Mr./Mrs. Atul regarding</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Vehicle Type</th>
                                <th>Registration</th>
                                <th>Chassis No.</th>
                                <th>Engine No</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Car</td>
                                <td>DL1CP2022</td>
                                <td>YV1FS8850C2141657</td>
                                <td>1151905</td>

                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <p>As Per the informations available till 29/12/202, 14:24:02 (based on data received from states/UTs police) the above,<br/>
                        mentioned vehicle is clean from the Police Criminal Database.</p>
                </div>
            </div>
        </div>
    )
}

export default memo(Goverment)
