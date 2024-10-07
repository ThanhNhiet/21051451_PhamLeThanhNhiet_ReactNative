import React, { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
    }, 1000);

    return () => clearInterval(interval); // Cleanup khi component bị unmount
  }, []); // Chạy một lần khi component mount

  return (
    <div>
      <h1>Pham Le Thanh Nhiet</h1>
    </div>
  );
}
