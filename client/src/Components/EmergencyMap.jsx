import React from 'react';

function EmergencyMap() {
  const handleEmergencyAlert = async () => {
    await fetch('http://localhost:5000/emergency-alert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ location: 'CBD', type: 'Medical' }),
    });
    alert('Emergency alert sent!');
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-200">
      <div className="w-full h-1/2 bg-gray-300 text-center">Map Placeholder</div>
      
      <div className="flex items-center justify-between w-full p-4 bg-white fixed bottom-0">
        <button className="p-3 bg-red-500 text-white rounded-lg" onClick={handleEmergencyAlert}>
          Emergency Alert
        </button>
        <button className="p-3 bg-gray-300 rounded-lg">Cancel</button>
      </div>
    </div>
  );
}

export default EmergencyMap;
