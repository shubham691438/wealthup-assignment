"use client";
import React, { useState, useEffect } from 'react';

export default function CodeComponent() {
  const backend_url=process.env.REACT_APP_BACKEND_URL;
  const [code, setCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [message, setMessage] = useState('');

  const generateCode = async () => {
    try {
      const response = await fetch(`https://long-lime-sheep-suit.cyclic.app//api/codes`);
      const data = await response.json();
      setCode(data.code);
      setMessage('');
    } catch (error) {
      console.error('Error fetching code:', error);
    }
  };

  const submitCode = async () => {
    try {
      const response = await fetch(`https://long-lime-sheep-suit.cyclic.app//api/codes/use`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: inputCode }),
      });
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      console.error('Error submitting code:', error);
    }
  };

  useEffect(() => {
    generateCode();
    // console.log(backend_url);
  }, []);

  return (
    <div className='min-h-screen bg-white text-black '>
        <div className='flex flex-col items-center pt-[100px]'>
            <div>
                <h1 >Code: {code}</h1>
                <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={generateCode}>Refresh</button>
            </div>

            <div className='mt-20'>
                <input
                className='bg-white-50 border border-white-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500'
                type="text"
                placeholder="Enter code"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                />
                <button className="ml-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={submitCode}>Submit</button>
            </div>

            <div>
                <p>{message}</p>
            </div>
        </div> 
    </div>
  );
}
