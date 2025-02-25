// state hook
// import Chai from "./Myfile";
// import {useState} from 'react'
// function App() {
//   const [text , setText]= useState()
//   const chagesVal =(e)=>{
//     setText(e.target.value)
//   }
//     return (
//     <>
//     <input 
//     value={text}
//     onChange={chagesVal}
//     />
//       <h1>{text}</h1>
//       <Chai />
//     </>
//   );
// }

// export default App;

import Chai from "./Myfile";
import {useState} from 'react'
function App() {
  const [text , setText]= useState()
  const chagesVal =(e)=>{
    setText(e.target.value)
  }
    return (
    <>
    <input 
    value={text}
    onChange={chagesVal}
    />

      <h1>{text}</h1>
      <Chai />
    </>
  );
} 

export default App;