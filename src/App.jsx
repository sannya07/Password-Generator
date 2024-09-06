import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [uppercase, setuppercase] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) {
      str += '0123456789';
    }
    if (charAllowed) {
      str += '@#$%^&*_-+';
    }
    if (uppercase){
      str +='ABCDEFGHOJKLMNOPQRSTUVWXYZ';
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed,uppercase, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed,uppercase, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-lg min-w-xs mx-auto mt-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg rounded-lg'>
        <h1 className='text-3xl text-center text-white mb-6 font-semibold'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-6'>
          <input 
            type='text'
            value={password}
            className='w-full p-2 bg-white text-gray-800 rounded-lg focus:outline-none'
            placeholder='Generated Password'
            ref={passwordRef}
            readOnly
          />
          <button 
            onClick={copyPasswordToClipboard}
            className='bg-green-600 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition-all duration-300 mx-2'>
            Copy
          </button>
        </div>
        
        <div className='flex flex-col gap-y-4'>
          <div className='flex items-center justify-between'>
            <label className='text-white text-lg'>Length: {length}</label>
            <input 
              type='range'
              min={8}
              max={100}
              value={length}
              className='w-full h-2 bg-gray-300 rounded-lg cursor-pointer accent-blue-600'
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className='flex items-center gap-x-3'>
            <input 
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput' 
              onChange={() => setNumberAllowed(prev => !prev)}
              className='w-5 h-5 text-blue-600 rounded focus:ring-0 cursor-pointer'
            />
            <label htmlFor='numberInput' className='text-white text-lg'>Include Numbers</label>
          </div>
          
          <div className='flex items-center gap-x-3'>
            <input 
              type='checkbox'
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => setCharAllowed(prev => !prev)}
              className='w-5 h-5 text-blue-600 rounded focus:ring-0 cursor-pointer'
            />
            <label htmlFor='charInput' className='text-white text-lg'>Include Special Characters</label>
          </div>
          <div className='flex items-center gap-x-3'>
            <input
            type='checkbox'
            defaultChecked={uppercase}
            id='uppercaseAllowed'
            onChange={() => setuppercase(prev =>!prev)}
            className='w-5 h-5 text-blue-600 rounded focus:ring-0 cursor-pointer '
            
            />
            <label htmlFor="uppercaseAllowed" className='text-white text-lg'> Include Uppercase Alphabets</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
