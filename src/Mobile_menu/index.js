import React, { useState,memo,useEffect } from 'react'
import './style.css';


import { GiHamburgerMenu } from 'react-icons/gi';
function Mobile_menu() {

    const [isOpen, setIsOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    const handleToggle = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
      window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    }, []);

    const Details = () => {
        if (screenWidth <= 768)
         {
          window.scrollTo({ top: 1201, behavior: "smooth" });
        } 
        else
         {
          window.scrollTo({ top: 616, behavior: "smooth" });
        }
      };
  
    const Total = () => {
      if (screenWidth <= 768)
       {
        window.scrollTo({ top: 3852, behavior: "smooth" });
      } 
      else
       {
        window.scrollTo({ top: 2516, behavior: "smooth" });
      }
    };
  
    const Noc = () => {
        if (screenWidth <= 768)
         {
          window.scrollTo({ top: 5737, behavior: "smooth" });
        } 
        else
         {
          window.scrollTo({ top: 4716, behavior: "smooth" });
        }
      };
     
      // console.log(window.innerWidth);

    return (
        <div className='mobile-hamburger'>
            <div className='containerStyle'>
                <GiHamburgerMenu onClick={handleToggle} className='hamburger' />
                {isOpen && (
                    <ul className='menuStyle'>
                        <li className='listItemStyle' onClick={Details}> Vehicle Details </li>
                        <li className='listItemStyle'> Legal Check</li>
                        <li className='listItemStyle' onClick={Noc}> No Crime
                            Record NOC </li>
                        <li className='listItemStyle' onClick={Total}> Total Loss/Written
                            Off Check </li>
                        <li className='listItemStyle'> Car Specs &
                            Features</li>
                        <li className='listItemStyle'> Market Value
                            Check</li>
                        <li className='listItemStyle'> How it works</li>

                    </ul>
                )}
            </div>





        </div>
    )
}

export default memo(Mobile_menu)
