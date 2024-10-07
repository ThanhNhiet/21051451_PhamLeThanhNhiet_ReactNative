import React, { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized');
    };

    window.addEventListener('resize', handleResize);

    // Cleanup khi component bị unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Chỉ chạy một lần khi component mount

  return (
    <div>
      <h1>Resize the window and check the console</h1>
    </div>
  );
}
