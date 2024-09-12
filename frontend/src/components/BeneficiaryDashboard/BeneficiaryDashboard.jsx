import React, { useState, useEffect } from 'react';
import "./BeneficiaryDashboard.css";
import { ToastContainer, toast } from 'react-toastify';


export const BeneficiaryDashboard = () => {
    
  const [donations, setDonations] = useState([]);
    const [arr, setArr] = useState([]);
    
  const fetchBeneficiaryData = async () => {
    try {
      // Simulated data fetching, replace with your API call
      const data = [
        { HotelName: 'John', Contact: 7834872352 ,address: '123 Main St', description: 'Lorem ipsum 1' },
        { HotelName: 'Jane', Contact: 7834872352 ,address: '456 Elm St', description: 'Lorem ipsum 2' },
        { HotelName: 'Bob', Contact: 7834872352 ,address: '789 Oak St', description: 'Lorem ipsum 3' },
      ];
      setArr(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchDonation = async () => {
    try {
      // Simulated data fetching, replace with your API call
      const data = [
        { HotelName: 'John', Contact: 7834872352 ,address: '123 Main St', description: 'Lorem ipsum 1' },
        { HotelName: 'Jane', Contact: 7834872352 ,address: '456 Elm St', description: 'Lorem ipsum 2' },
        { HotelName: 'Bob', Contact: 7834872352 ,address: '789 Oak St', description: 'Lorem ipsum 3' },
      ];
      setDonations(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDonation();
    fetchBeneficiaryData(); // Call the fetchData function when the component mounts
  }, []);

  const handleRefresh = () => {
    // notify();
    fetchDonation(); // Call the fetchData function to refresh data
  };
    
  return (
    <div className='entireDivrr'>
        <h1 className='titlerr'>
            Donations Available!
        </h1>
        <div className='carderr'>
            {donations.map((item, index) => (
                <div className='cardrr'>
                    <div key={index}>
                        <h1>{item.HotelName}</h1>
                        <p>Address: {item.address}</p>
                        <p>Contact: {item.Contact}</p>
                        <div>Description: {item.description}</div>
                        <button onClick={()=>{
                            alert("Request Sent!")
                        }} className='btnrr'>
                            Request
                        </button>
                    </div>
                </div>
            ))}
        </div>
        

        <button onClick={handleRefresh}>Refresh Data</button>
        <h1> </h1>
        <h1 className='titlerr'>
            Donations History!
        </h1>
        <div className='carderr'>
            {arr.map((item, index) => (
                <div className='cardrr'>
                    <div key={index}>
                        <h1>{item.HotelName}</h1>
                        <p>Address: {item.address}</p>
                        <p>Contact: {item.Contact}</p>
                        <div>Description: {item.description}</div>
                        {/* <button onClick={()=>{
                            alert("Request Sent!")
                        }} className='btnrr'>
                            Request
                        </button> */}
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}


export default BeneficiaryDashboard;