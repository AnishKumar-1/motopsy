import React, { memo } from 'react'
import './style.css';
import img from '../images/9.png';
import img2 from '../images/Section 2/2.png';
import img3 from '../images/Section 2/3.png';
import img4 from '../images/Section 2/4.png';
import img5 from '../images/Section 2/5.png';
import img6 from '../images/Section 2/6.png';
import img7 from '../images/Section 2/7.png';
import img8 from '../images/Section 2/8.png';
import logo from '../images/logo.png';

function SummaryDown() {

  return (
    <div className='summaryDown-main'>
      <div className='summary-sub'>
        <div className='text-container'>
          {/* <h2>MOTOPSY</h2>
          <h5>Vehical History Report</h5> */}
          <img src={logo} className='logo' />
          <h1>“Volvo Group India PVT LTD” Volvo S-60 D3 2.0L, 2012</h1>
        </div>

        {/* fist line container........................... */}
        <div className='line-main-top-container line-main-top-container-circle '>
          <div className='line-top-text'>
            <p>Registration
              Details</p>
          </div>

          <div className='line-container'>

            <div className='first'>
              <div className='one-div icon image-div'><img src={img} style={{ filter: "invert(100%)", height: "100px", width: "100px" }} /></div>
              <div className='one-div'>
                <div className='data change-color'>
                  <p>Registration No</p>
                </div>
                <div className='data change-color'>
                  <p>State</p>
                </div>
                <div className='data change-color'>
                  <p>Registration No</p>
                </div>
                <div className='data change-color'>
                  <p>State</p>
                </div>
              </div>
              <div className='one-div '>
                <div className='data change-'>
                  <p>lorem</p>
                </div>
                <div className='data change-'>
                  <p>Lorem</p>
                </div>
                <div className='data change-'>
                  <p>Lorem</p>
                </div>
                <div className='data change-'>
                  <p>Lorem</p>
                </div>
              </div>
              <div className='one-div'>
                <div className='data change-color'>
                  <p>Registration No</p>
                </div>
                <div className='data change-color'>
                  <p>State</p>
                </div>
                <div className='data change-color'>
                  <p>Registration No</p>
                </div>
              </div>
              <div className='one-div '>
                <div className='data '>
                  <p>Lorem</p>
                </div>
                <div className='data '>
                  <p>Lorem</p>
                </div>
                <div className='data '>
                  <p>Lorem</p>
                </div>
              </div>

            </div>
            <div className='second'>
              <p  style={{color:"gray"}}>Verify the validity of the car's registration document. It should include the owner's name and the car's particulars – engine number, chassis number, etc. The certificate must be original. If it is a duplicate, it would be marked as DRC. In such a case, ask about the DRC status
                from the seller and ascertain the state in which it was registered. If you plan to transfer the car to another state, its registration must be
                done with the RTO of that state. After purchasing, the vehicle's registration certificate should contain your name.</p>
            </div>
          </div>
        </div>

        {/* second line container.................................... */}

        <div className='second-line-main-container main-1 '>
          <div className='line-bottom-text'>
            <p>Ownership
              Details</p>
          </div>
          <div className='second-line-container'>
            <div className="second-line-both-container">
              <div className="both-first">
                <div className='one'>
                  <div className='text bluecolor'>
                    <p>Owner Serial Number</p>
                  </div>
                  <div className='text bluecolor'>
                    <p>Owner Name</p>
                  </div>
                </div>
                <div className='one'>
                  <div className='text whitecolor'>
                    <p>Lorem</p>
                  </div>
                  <div className='text  whitecolor'>
                    <p>Lorem</p>
                  </div>
                </div>
                <div className='one'>
                  <img src={img2} style={{ height: "100px", width: "100px" }} />
                </div>
              </div>
              <div className='both-second'>
                <p  style={{color:"gray"}}>Registration Certificate must have Owner's Name. All commercial and leagal ownership lies with name mentioned on RC.</p>
              </div>
            </div>
          </div>
          <div></div>

          {/* third start from here............................................... */}

          <div className='line-main-top-container check-line main-2 '>
            <div className='line-top-text'>
              <p>Vehicle Summary</p>
            </div>

            <div className='line-container'>
              <div className='hide-data'></div>
              <div className='first'>
                <div className='one-div icon image-div'><img src={img3} style={{ height: "100px", width: "100px" }} /></div>
                <div className='one-div'>
                  <div className='data change-color'>
                    <p>Registration No</p>
                  </div>
                  <div className='data change-color'>
                    <p>State</p>
                  </div>
                  <div className='data change-color'>
                    <p>Registration No</p>
                  </div>
                  <div className='data change-color'>
                    <p>State</p>
                  </div>
                </div>
                <div className='one-div '>
                  <div className='data change-'>
                    <p>Lorem</p>
                  </div>
                  <div className='data change-'>
                    <p>Lorem</p>
                  </div>
                  <div className='data change-'>
                    <p>Lorem</p>
                  </div>
                  <div className='data change-'>
                    <p>Lorem</p>
                  </div>
                </div>
                <div className='one-div'>
                  <div className='data change-color'>
                    <p>Registration No</p>
                  </div>
                  <div className='data change-color'>
                    <p>State</p>
                  </div>
                  <div className='data change-color'>
                    <p>Registration No</p>
                  </div>
                  <div className='data change-color'>
                    <p>State</p>
                  </div>
                </div>
                <div className='one-div '>
                  <div className='data '>
                    <p>Lorem</p>
                  </div>
                  <div className='data '>
                    <p>Lorem</p>
                  </div>
                  <div className='data '>
                    <p>Lorem</p>
                  </div>
                  <div className='data '>
                    <p>Lorem</p>
                  </div>
                </div>

              </div>
              <div className='second'>
                <p  style={{color:"gray"}}>Quick summary of vehiclae registed at RTO records</p>
              </div>
            </div>
          </div>
          {/* fourth start from here......................................... */}

          <div className='second-line-main-container main-3 '>
            <div className='line-bottom-text'>
              <p>Blacklist Status</p>
            </div>
            <div className='second-line-container'>
              <div className="second-line-both-container">
                <div className="both-first">
                  <div className='one'>
                    <div className='text bluecolor'>
                      <p>Status</p>
                    </div>

                  </div>
                  <div className='one'>
                    <div className='text whitecolor'>
                      <p>Lorem</p>
                    </div>

                  </div>
                  <div className='one'>
                    <img src={img4} style={{ filter: "invert(100%)", height: "100px", width: "100px" }} />
                  </div>
                </div>
                <div className='both-second'>
                  <p  style={{color:"gray"}}>The Regional Transport Office may blacklist a vehicle for various causes, such as converting a yellow board to whiteboard, failing<br />
                    to pay taxes on the vehicle, or any issues with the documents while buying it.</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>



          {/* fifth  start from here............................................... */}

          <div className='second-line-main-container getval gapset main-4'>
            <div className='pin-data'></div>
            <div className='line-bottom-text set-upper-div'>
              <p>Finance Details</p>
            </div>
            <div className='second-line-container change-data'>
              <div className="second-line-both-container">
                <div className="both-first">
                  <div className='one two'>
                    <img src={img5} style={{ height: "100px", width: "100px" }} />
                  </div>
                  <div className='one'>
                    <div className='text bluecolor'>
                      <p>Hypothecation</p>
                    </div>
                    <div className='text bluecolor'>
                      <p>Financer’s Name</p>
                    </div>

                  </div>

                  <div className='one'>
                    <div className='text whitecolor'>
                      <p>lorem</p>
                    </div>
                    <div className='text whitecolor'>
                      <p>lorem</p>
                    </div>
                  </div>

                </div>
                <div className='both-second'>
                  <p  style={{color:"gray"}}>In case you see that the used car that you’re buying is hypothecated to a bank (mentioned on RC), you need to ask <br /> for the NOC from the
                    current owner.</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>




          {/* six start from here.................................................................................. */}
          <div className='second-line-main-container main2 main-5  '>
            <div className='line-bottom-text ' >
              <p>PUC Details</p>
            </div>
            <div className='second-line-container main '>
              <div className='main-div'></div>
              <div className="second-line-both-container">
                <div className="both-first">
                  <div className='one'>
                    <div className='text bluecolor'>
                      <p>PUC No</p>
                    </div>
                    <div className='text bluecolor'>
                      <p>Financer’s Name</p>
                    </div>
                  </div>
                  <div className='one'>
                    <div className='text whitecolor'>
                      <p>Lorem</p>
                    </div>
                    <div className='text  whitecolor'>
                      <p>Lorem</p>
                    </div>
                  </div>
                  <div className='one'>
                    <img src={img6} style={{ height: "100px", width: "100px" }} />
                  </div>
                </div>
                <div className='both-second'>
                  <p  style={{color:"gray"}}>A PUC (Pollution Under Control) certificate is required to demonstrate that a motor vehicle's emissions comply with the Government of
                    <br />
                    India's pollution control standards. To ensure that air pollution levels remain within acceptable limits, regular inspections are conducted<br />
                    on all types of vehicles to check their smoke emissions</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          {/* seven start from here.................................................. */}

          <div className='second-line-main-container getval anish2  main-6'>
            <div className='pin-data'></div>
            <div className='line-bottom-text up '>
              <p>Insurance
                Details</p>
            </div>
            <div className='second-line-container change-data anish3'>
              <div className='hide-seven'></div>
              <div className="second-line-both-container" >
                <div className="both-first">
                  <div className='one two'>
                    <img src={img7} style={{ height: "100px", width: "100px" }} />
                  </div>
                  <div className='one'>
                    <div className='text bluecolor'>
                      <p>Policy Number</p>
                    </div>
                    <div className='text bluecolor'>
                      <p>Insurance Upto</p>
                    </div>
                    <div className='text bluecolor'>
                      <p> Insurance Upto</p>
                    </div>

                  </div>

                  <div className='one'>
                    <div className='text whitecolor'>
                      <p>lorem</p>
                    </div>
                    <div className='text whitecolor'>
                      <p>lorem</p>
                    </div>
                    <div className='text whitecolor'>
                      <p>lorem</p>
                    </div>

                  </div>

                </div>
                <div className='both-second' style={{ marginTop: "40px" }} >
                  <p  style={{color:"gray"}}>By law, all vehicles need to have a current insurance policy. Asking the seller for the policy can give you information on the claims made
                    by prior owners, as well as if the car has been in a serious accident. If the new owner is taking over the existing policy, they must transfer
                    it into their name. Furthermore, one should check the expiration date of the policy, as renewing it may be costly. It's important to review
                    the policy to determine what is and isn't covered before purchasing the vehicle.</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          {/* eight start from here........................................................................ */}
          <div className='second-line-main-container  main2 anish4  main-7'>
            <div className='line-bottom-text '>
              <p>Challan Details</p>
            </div>
            <div className='second-line-container main anish3 border-remove-last-div '>
              <div className='none-line'></div>
              <div className="second-line-both-container main-7-line-container">
                <div className="both-first">
                  <div className='one'>
                    <div className='text bluecolor'>
                      <p>No. of Challan</p>
                    </div>
                    {/* <div className='text bluecolor'>
                      <p>Financer’s Name</p>
                    </div> */}
                  </div>
                  <div className='one'>
                    <div className='text whitecolor'>
                      <p>Lorem</p>
                    </div>
                    {/* <div className='text  whitecolor'>
                      <p>Lorem</p>
                    </div> */}
                  </div>
                  <div className='one'>
                    <img src={img8} style={{ height: "100px", width: "100px" ,marginTop:"-20px"}}  />
                  </div>
                </div>
                <div className='third-four-container'>
                  <div className='first'>
                    <div className='one' style={{background:"#2bace2"}}>
                           <p>Date</p>
                    </div>
                    <div className='one' style={{background:"#2bace2"}}>
                    <p>lorem</p>
                    </div>
                    <div className='one' style={{background:"#2bace2"}}>
                    <p>lorem</p>
                    </div>
                    <div className='one' style={{background:"#2bace2"}}>
                    <p>lorem</p>
                    </div>
                  </div>
                  <div className='first'>
                    <div className='one'>
                    <p>Offense Details</p>
                    </div>
                    <div className='one'>
                    <p>lorem</p>
                    </div>
                    <div className='one'>
                    <p>lorem</p>
                    </div>
                    <div className='one'>
                    <p>lorem</p>
                    </div>
                  </div>
                  <div className='first'>
                    <div className='one'>
                    <p>Amount Challan</p>
                    </div>
                    <div className='one'>
                    <p>lorem</p>
                    </div>
                    <div className='one'>
                    <p>lorem</p>
                    </div>
                    <div className='one'>
                    <p>lorem</p>
                    </div>
                  </div>
                  <div className='first'>
                    <div className='one'>
                    <p>Status</p>
                    </div>
                    <div className='one'>
                    <p>lorem</p>
                    </div>
                    <div className='one'>
                    <p>lorem</p>
                    </div>
                    <div className='one'>
                    <p>lorem</p>
                    </div>
                  </div>

                </div>
                <div className='both-second'>
                  <p style={{color:"gray"}}>Verify that any outstanding challans for the vehicle have been paid by the previous owner; otherwise, the current owner is responsible for
                    them.</p>
                </div>

              </div>
            </div>
            <div></div>
          </div>

        </div>






        {/* end............................................. */}
      </div>
    </div>

  )
}

export default memo(SummaryDown)
