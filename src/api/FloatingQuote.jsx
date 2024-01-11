import React, { useState, useEffect } from 'react';

const FloatingQuote = () => {
  const [quote, setQuote] = useState('');
  const [showFloatingDiv, setShowFloatingDiv] = useState(false);

  useEffect(() => {
    // Function to fetch a new quote from the API
    const fetchNewQuote = () => {
      fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
          setQuote(data.slip.advice);
          setShowFloatingDiv(true);
        })
        .catch(error => console.error('Error fetching quote:', error));
    };

    // Fetch the initial quote
    fetchNewQuote();

    // Refresh the quote every 1 minute
    const intervalId = setInterval(fetchNewQuote, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div style={showFloatingDiv ? floatingDivStyle : { display: 'none' }}>
       <p style={{ color: "#32C4C3",marginBottom:'10px', }}>Quote #1</p>
      <p>"{quote}"</p>
    </div>
  );
};

// Style for the floating div
const floatingDivStyle = {
  position: 'fixed',
  bottom: '50px',
  left: '60px',
  backgroundColor: '#192A32',
  color:'#F2B237',
  fontWeight:'Bold',
  padding: '10px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '300px',
  display:'inline',
  flexDirection:'column',
  // alignItems: 'center',
  // justifyContent: 'center',
  textAlign:'center',
  gap:'10px',
};

export default FloatingQuote;
