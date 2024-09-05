// import { useState, useCallback, useEffect, useRef } from 'react'

// import './App.css'

// function App() {
//   const [length, setlength]= useState(8);
//   const [numberAllowed, setNumberAllowed]= useState(false);
//   const [charAllowed, setCharAllowed]= useState(false);
//   const [password, setPassword]= useState("")

//   // ref hook
//   const passwordref= useRef(null)

//   const passwordGenerator = useCallback(()=>{
//     let pass=""
//     let str="ABCDEFGHOJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberAllowed){
//       str=str+"0123456789"
//     }
//     if(charAllowed){
//       str=str+"@#$%^&*_-+"
//     }

//     for(let i=1;i<=length;i++){
//       let char= Math.floor(Math.random() * str.length +1)
//       pass += str.charAt(char)
//     }
//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed, setPassword])
 
//   const copypasswordtoclipboard=useCallback(()=>{
//     passwordref.current?.select()
//     window.navigator.clipboard.writeText(password)
//   },[password])

//   useEffect(()=>{
//     passwordGenerator();
//   }, [length, numberAllowed, charAllowed, passwordGenerator])

//   return (
//     <>
      
//       <div style={{backgroundColor: '#131920'}} className='w-full max-w-lg min-w-xs mx-auto mt-10 p-5  shadow-md rounded-lg text-blue-600'>
//       <h1 className='text-2xl text-center text-white mb-4' > Password Generator </h1>
//         <div className='flex shadow rounded-lg overflow-hidden mb-4'>
//           <input type='text'
//           value={password}
//           className='outline-none w-full py-1 px-3 mx-3 rounded-lg'
//           placeholder='Password'
//           ref={passwordref}/>
//           <button onClick={copypasswordtoclipboard}
//           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 mx-2 rounded-lg' > copy </button>
//         </div>
//         <div className=' flex text-md gap-x-2 '>
//           <div className='flex items-center gap-x-2'>
//             <input 
//             type="range" 
//             min={8}
//             max={100}
//             value={length}
//             className='cursor-pointer mx-3' 
//             onChange={(e) => setlength(e.target.value)}
//             />
//             <label> Length: {length}</label>
//           </div>
//           <div className='flex items-center gap-x-2'>
//             <input type="checkbox"
//             defaultChecked={numberAllowed}
//             id='numberaInput' 
//             onChange={()=>{
//               setNumberAllowed((prev)=>(!prev));
//             }}/>
//             <label htmlFor="numberInput">Numbers</label>
//           </div>
//           <div className='flex items-center gap-x-2'>
//             <input type="checkbox"
//             defaultChecked={charAllowed}
//             id='charinput'
//             onChange={()=>{
//               setCharAllowed((prev)=>(!prev));
//             }} />
//             <label htmlFor="charinput">Characters</label>
//           </div>
        
//         </div>
//       </div>
//     </>
//   )
// }

// export default App