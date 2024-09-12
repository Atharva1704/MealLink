import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./DonorDashboard.css";

export const DonorDashBoard = () => {
  const [prevDonation, setprevDonation] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (!response.ok) {
            throw new Error('Failed to fetch posts');
          }
          const data = await response.json();
          setprevDonation(data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
  
      fetchPosts();


    // const fetchData = async () => {
    //   try {
    //     const data = [
    //       { name: 'John', address: '123 Main St', description: 'Lorem ipsum 1' },
    //       { name: 'Jane', address: '456 Elm St', description: 'Lorem ipsum 2' },
    //       { name: 'Bob', address: '789 Oak St', description: 'Lorem ipsum 3' },
    //     ];
    //     setprevDonation(data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    // fetchData(); 
  }, []);

  const prevDonationArray = prevDonation.map((item, index) => (
    <div className='dataCard' key={index}>
      <h1 className='CardDate'>Donation date: {item.name}</h1>
      <h1 className='CardAddress'>Donation address: {item.address}</h1>
      <h2 className='CardDescription'>Donation description: {item.description}</h2>
    </div>
  ));


  return (
    <div className='entireDiv'>
      <div className=''>
        <h1 className='BeneTitle'>
          Beneficiary Request!
        </h1>
        <div>
          {}
        </div>
      </div>
      <div className='Donordiv'>
        <h1 className='titles'>Donor Feed!!</h1>
        <div className='cardHolder'>{prevDonationArray}</div>
        <button className='btnrr' onClick={() => {navigate("/Donor/DonateNow")}}>Donate Now!!</button>
      </div>
    </div>
  );
};

export default DonorDashBoard;
