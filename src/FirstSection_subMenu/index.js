import React, { useEffect, useState,memo } from 'react';
import axios from 'axios';
import './style.css';
import logo from '../images/logo.png';



function FirstSection_subMenu({setgetdata}) {


  const [vehicaldata, setvehicaldata] = useState({});
  const [getimage,setgetimage]=useState('');
  
  
const imageXml = new DOMParser().parseFromString(getimage, "text/xml");
const stringElement = imageXml.getElementsByTagName("string")[0];

let imageUrl;
if (stringElement) {
  imageUrl = stringElement.innerHTML;
}

// /?id=UEIxMUNYNTY0Nw==

  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get("id")

  if(id==null)
  {
    // window.location.href="http://motopsy.com";
  }
// useEffect(()=>{
//   printSelectedData(document.getElementById('register-data').innerText);
// })

  useEffect(() => {
    axios.post("http://localhost:5000/vehicle-registration",{vehicleNumber:id})
      .then(res => {
        setvehicaldata(res.data);
        setgetdata(res.data);
      })
      .catch(err => {
        console.log(err);
      });

      axios.get(`https://carimagery.com/api.asmx/GetImageUrl?searchTerm=${vehicaldata.model}`)
      .then(res => {
        setgetimage(res.data);
      })
    
  })
  return (
    <div className='first-section-top-div'>

      <div className='contain-both' id="register-data">
        <div className='first-section-mid-div'>
          <div className='first-section-mid-lorem-div odd left'><p>Registration No</p></div>
          <div className='first-section-mid-lorem-div eve left'><p>Make</p></div>
          <div className='first-section-mid-lorem-div odd left'><p>Model and Trim</p></div>
          <div className='first-section-mid-lorem-div eve left'><p>Color</p></div>
          <div className='first-section-mid-lorem-div odd left'><p>Manufacturing Year</p></div>
          <div className='first-section-mid-lorem-div eve left'><p>Registration Month & Year</p></div>
          <div className='first-section-mid-lorem-div odd left'><p>Fuel Type</p></div>
          <div className='first-section-mid-lorem-div eve left'><p>Ownership S.no</p></div>
          <div className='first-section-mid-lorem-div odd left'><p>Fitness/Registration Upto</p></div>
          <div className='first-section-mid-lorem-div eve left'><p>Vehicle Age</p></div>
          <div className='first-section-mid-lorem-div odd left'><p>Engine No</p></div>
          <div className='first-section-mid-lorem-div eve left'><p>Chasis No</p></div>
        </div>
        <div className='first-section-mid-div'>
          <div className='first-section-mid-lorem-div right'><p>{vehicaldata.regNo}</p></div>
          <div className='first-section-mid-lorem-div right'><p>{vehicaldata.vehicleManufacturerName}</p></div>
          <div className='first-section-mid-lorem-div right'><p>{vehicaldata.model}</p></div>
          <div className='first-section-mid-lorem-div right'><p>{vehicaldata.vehicleColour}</p></div>
          <div className='first-section-mid-lorem-div right'><p>{vehicaldata.vehicleManufacturingMonthYear}</p></div>
          <div className='first-section-mid-lorem-div right'><p>{vehicaldata.regDate}</p></div>
          <div className='first-section-mid-lorem-div right'><p>{vehicaldata.type}</p></div>
          <div className='first-section-mid-lorem-div right'><p>{vehicaldata.ownerCount}</p></div>
          <div className='first-section-mid-lorem-div right'><p>{vehicaldata.vehicleInsuranceUpto}</p></div>
          <div className='first-section-mid-lorem-div right'><p>{vehicaldata.rcExpiryDate}</p></div>
          <div className='first-section-mid-lorem-div right' ><p>{vehicaldata.engine}</p></div>
          <div className='first-section-mid-lorem-div right'><p>{vehicaldata.chassis}</p></div>

        </div>
      </div>
      <div className='first-section-right-div'>
        <div className='car-div'>
          <div className='first-section-right-div-data'>
            {/* <p className='p1'>MOTOPSY</p>
            <p className='p2'>Vehicle History Report</p> */}
            <img src={logo} height="60px" width="200px"/>
            <p className='p3'>“Volvo Group India PVT LTD” Volvo S-60 D3 2.0L,
              2012</p>
          </div>
          <div className='first-section-right-div-car'>
            <img src={imageUrl}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(FirstSection_subMenu)
