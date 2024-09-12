import React from 'react';
import { useNavigate } from 'react-router-dom';
import Thankyou from "../../photos/thankyou1.jpg";
import "./DonateThank.css";

export const DonateThank = () => {
  const navigate = useNavigate();
  
    return (
    <div className='maindivtt'>
        <h1 className='titlett'>Thank you </h1>
        <p className='desctt'>
            We want to extend a heartfelt thank you for your recent food donation. Your generosity is truly making a difference in our community, and we're incredibly grateful for your support.

            Your contribution not only provides essential nourishment but also brings comfort and hope to those in need. Your kindness shines through in every can and package, reminding us of the power of compassion.

            Because of you, we're able to continue our mission of helping individuals and families facing food insecurity. Your willingness to lend a hand means more than words can express.
        </p>
        <img className='imgtt' src={Thankyou}></img>
        <h2>    
            Thank you for being a beacon of generosity. Your donation is deeply appreciated, and we're honored to have you as part of our community of caring individuals.
        </h2>
        <button className='btntt' onClick={()=>{
          navigate("/donor/dashboard");
        }}  type="submit">
          Go to Dashboard
        </button>
    </div>
  )
}

export default DonateThank;

