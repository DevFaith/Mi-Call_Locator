import React, { useState } from 'react';

function LandingPage() {
  const [email, setEmail] = useState('');
  
  const handleJoinWaitlist = async () => {
    await fetch('http://localhost:5000/join-waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    alert('Joined the waitlist!');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <img src="/logo.png" alt="MiCall" className="w-24 mb-4" />
      <h1 className="text-3xl font-bold">MICALL</h1>
      <p className="text-lg mt-2">Your Emergency Network, Just a Tap Away.</p>
      
      <div className="mt-8 space-y-4">
        <button
          className="w-64 p-3 bg-green-600 text-white rounded-lg"
          onClick={handleJoinWaitlist}
        >
          Join the Waitlist – It’s Free!
        </button>
        
        <button className="w-64 p-3 bg-black text-white rounded-lg">
          Test MiCall Now
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
