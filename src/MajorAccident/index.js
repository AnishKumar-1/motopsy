import React, { memo } from 'react'
import './style.css';
import { ImCheckmark } from 'react-icons/im';
import img1 from '../images/Section 4/1.png';
// import img2 from '../images.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';
import img13 from '../images/13.png';
function MajorAccident() {
    return (
        <div className='major-main'>
            <div className='h1-p'>
                <h1>Major Accident Check for Insurance</h1>
                <p>Write off-Total Loss or Flood Loss</p>
            </div>
            <div className='one'>
                {/* <ImCheckmark className='icon1' /> */}
                <img src={img11} height="100px" width="100px" />
                <p>The vehicle is deemed a total loss/constructive total loss if the cost of retrieval and/or repair, in accordance with the
                    policy's terms and conditions, is greater than 75% of the vehicle's Insured Declared Value (IDV).</p>
            </div>
            <div className='two'>
            <img src={img12} height="100px" width="100px" />
                {/* <ImCheckmark className='icon2' /> */}
                <p>The insurance company contacts a salvage/scrap buyer to assess the value of a vehicle based on two parameters:
                    with RC (Case 1) or without RC (Case 2). In Case 1, the customer's name is transferred to the salvage buyer, who then
                    repairs and resells the vehicle. In Case 2, the RC is cancelled and the vehicle is no longer usable. The insurance
                    company pays the difference between the IDV and the amount quoted by the salvage buyer, who then pays the
                    amount quoted to the customer. Thus, in both cases, the customer receives the IDV. The insurance company has
                    a greater chance of minimizing losses when claims are settled with RC, as illustrated in Case 1.</p>
            </div>
            <div className='three'>
            <img src={img13} height="100px" width="100px" />
                {/* <ImCheckmark className='icon3' /> */}
                <p>MOTOTPSY's exclusive database is constantly updated with Total Loss declared and reconstructed vehicles being
                    sold in the second-hand market. These vehicles may go unnoticed among other non-accidental ones, but may
                    cause issues in the long run, despite appearing normal at first. MOTOTPSY helps users identify such re-built
                    vehicles</p>
            </div>

        </div>
    )
}

export default memo(MajorAccident);
