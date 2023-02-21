import React, { memo } from 'react'
import './style.css';
function Summary() {
    return (
        <div className='summary-main'>
            <div className='two-div-controler'>
                <div className='one-div'>
                    <p>“Volvo Group India PVT LTD” Volvo S-60 D3 2.0L, 2012</p>
                </div>
                <div className='eight-main-container'>
                    <div className='one-main'>
                        <div className='text-container'>
                            <p>REGISTRATION
                                DETAILS</p>
                        </div>
                        <div className='one-main-inside'>
                            <p>These are recorded with<br />
                                Respective RTO, all details<br />
                                need to be verified before<br />
                                buying used vehicle</p>
                        </div>
                    </div>
                    <div className='one-main'>
                        <div className='text-container'>
                            <p>OWNERSHIP
                                DETAILS</p>
                        </div>
                        <div className='one-main-inside'>
                            <p>Specifies the current legal<br />
                                owner of the car, authorized<br />
                                signatory and seller. Verify<br />
                                Owner’s identity before<br />
                                buying his/her car.</p>
                        </div>
                    </div>
                    <div className='one-main'>
                        <div className='text-container'>
                            <p>VEHICLE SUMMARY</p>
                        </div>
                        <div className='one-main-inside'>
                            <p>This info is registered with<br />
                                RTO about the respective<br />
                                vehicle. Verify in physical<br />
                                before buying</p>
                        </div>
                    </div>
                    <div className='one-main'>
                        <div className='text-container'>
                            <p>Blacklist Status</p>
                        </div>
                        <div className='one-main-inside'>
                            <p>
                                Blacklisted vehicle cannot<br />
                                be re-registered. Vehicle can<br />
                                be blacklisted for several<br />
                                critical reasons
                            </p>
                        </div>
                    </div>
                    <div className='one-main'>
                        <div className='text-container'>
                            <p>Finance Details</p>
                        </div>
                        <div className='one-main-inside'>
                            <p>Vehicle must not be<br />
                                hypothecated to any<br />
                                financial institution. Bank<br />
                                NOC is must if RC is<br />
                                hypothecated</p>
                        </div>
                    </div>
                    <div className='one-main'>
                        <div className='text-container'>
                            <p>PUC Details</p>
                        </div>
                        <div className='one-main-inside'>
                            <p>It’s mandatory for vehicles in<br />
                                India to have valid Pollution<br />
                                Under Control Certificate,<br />
                                before registration</p>
                        </div>
                    </div>
                    <div className='one-main'>
                        <div className='text-container'>
                            <p>Insurance Details</p>
                        </div>
                        <div className='one-main-inside'>
                            <p>It’s mandatory for vehicles in<br />
                                India to have valid Insurance,<br/>
                                before registration</p>
                        </div>
                    </div>
                    <div className='one-main'>
                        <div className='text-container'>
                            <p>Challan Details</p>
                        </div>
                        <div className='one-main-inside'>
                            <p>All pending challans need to<br />
                                be paid off before<br />
                                registration</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Summary)
