
import './App.css';

import img1 from '../src/images/1.png';
import img2 from '../src/images/2.png';
import img3 from '../src/images/3.png';
import img4 from '../src/images/4.png';
import Mobile_menu from './Mobile_menu';
import FirstSection_subMenu from './FirstSection_subMenu';
import First_section_last from './First_section_last';
import { AiFillPrinter } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import TotalLoss from './TotalLoss';
import StolenCheck from './StolenCheck';
import MajorAccident from './MajorAccident';
import Goverment from './Goverment';
import BelowGoverment from './BelowGoverment';
import Summary from './Summary';
import SummaryDown from './SummaryDown';
import logo from './images/logo.png';

function App() {
  const [getdata, setgetdata] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  // console.log(scrollY);
  function Total() {
    if (screenWidth >= 1280) {
      window.scrollTo({
        top: 1727,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
  function Noc() {
    if (screenWidth >= 1280) {
      window.scrollTo({
        top: 2754,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
  function Details() {
    if (screenWidth >= 1280) {
      window.scrollTo({
        top: 453,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
  //  const {id}=useParams();

  //  let id=Base64.decode(id);

  // console.log(id);

  //  if(id=="undefined")
  //  {
  //  window.location.href="http://motopsy.com"; 
  //  }




  // let data= getdata.regDate;
  // let dateArray =data.split("/");
  // let year=dateArray[2]


  // console.log(window.scrollY);

  const printdata = () => {
    window.print();
  }

  const currentDate = new Date();

  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  };

  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  let alldate = (currentDate.toLocaleDateString("en-US", options) + ' | ' + currentDate.toLocaleTimeString("en-US", timeOptions));

  // function printSelectedData(params) {
  //   const text = 'This is some sample text data';
  //   const searchTerm = 'sample';
  //   const indexOfSearchTerm = text.indexOf(searchTerm);
  //   const extractedText = text.substring(indexOfSearchTerm, indexOfSearchTerm + searchTerm.length);

  //   const printWindow = window.open('', '', 'height=400,width=800');
  //   printWindow.document.write(`<html><body><div>${extractedText}</div></body></html>`);
  //   printWindow.document.close();
  //   printWindow.focus();
  //   printWindow.print();
  //   console.log(params);
  // }

  return (
    <div className="App">
      <div>
        <header>
          <Mobile_menu />
          <div className='header-left-div'>
            <div className='left-inside-left-div'>
              {/* <h1>motopsy</h1>
              <br />
              <p>vehical history report</p> */}
              <img src={logo} style={{width:"inherit",height:"inherit",borderRadius:"inherit"}}/>

            </div>
            <div className='left-inside-right-div'>
              <ul>
                <li key={1} onClick={Details}>Vehical Details</li>
                <li key={2}>Legal Check</li>
                <li key={3} onClick={Noc}>No Crime  Record NOC</li>
                <li key={4} onClick={Total}>Total Loss/Written<br />
                  Off Check </li>
                <li key={5}>Car Specs &
                  Features</li>
                <li key={6}>Market Value
                  Check</li>
                <li key={7}>How it works</li>
              </ul>
            </div>
          </div>
          <div className='header-right-div'>
            <div className='header-report-id'>
              <h4>Report ID</h4>
              <p>5266958</p>
            </div>
            <div className='header-report-text'>
              <p>Generated on:<br />
                {alldate}</p>
            </div>
          </div>
        </header>
      </div>

      <div className='sub-header-paren'>
        <div className='sub-header'>
          <div className='sub-header-left-div'><p>Year:2023</p></div>
          <div className='sub-header-right-div'>
            <div className='sub-header-vehical-text'><p>Vehicle Registration No</p></div>
            <div className='sub-header-number-div'>
              <p>{getdata.regNo}</p>

            </div>
          </div>
        </div>

      </div>

      <div className='motospy-four-div-main-container'>
        <div className='four-div-main-container-h'>
          {/* <h3 >motopsy</h3>
          <p>Vehical History Report</p> */}
          <img src={logo} style={{width:"inherit",height:"inherit",borderRadius:"inherit"}}/>
          
        </div>
        <div className='printreport' onClick={printdata}><AiFillPrinter className='icon' /> &nbsp;<p>Print</p></div>
        <div className='four-div-h3-container'>



          <div className='four-div'>

            <div className='div-one-top div-one-top-one'>
              <div className='div-one-half'>
                <div className='div-one-inside-div'>
                  <img src={img1} className="img1" />
                  <h3 className='first-h'>28.5 Cr +</h3>
                  <p className='first-p'>Vehicle data
                    base</p>
                </div>
              </div>

            </div>

            <div className='div-one-top div-one-top div-one-top-two'>
              <div className='div-one-half'>
                <div className='div-one-inside-div'>
                  <img src={img2} className="img1 img2" />
                  <h3 className='second-h'>10K</h3>
                  <p className='second-p'>& growing total<br />
                    loss vehicle list</p>
                </div>
              </div>

            </div>
            <div className='div-one-top div-one-top div-one-top-three'>
              <div className='div-one-half'>
                <div className='div-one-inside-div'>
                  <img src={img3} className="img1 img3" />
                  <p className='third-p'>Pan India Stolen<br />
                    Vehicle list </p>
                </div>
              </div>

            </div>
            <div className='div-one-top div-one-top div-one-top-four'>
              <div className='div-one-half'>
                <div className='div-one-inside-div'>
                  <img src={img4} className="img1 img4" />
                  <h3 className='four-h'>8K</h3>
                  <p className='four-p'>past & present
                    Indian <br />Cars
                    specs details </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <FirstSection_subMenu setgetdata={setgetdata} />
      <First_section_last />
      <TotalLoss />
      <MajorAccident />
      <StolenCheck />
      <Goverment />
      <BelowGoverment />
      <Summary />
      <SummaryDown />
    </div>
  );
}

export default App;
