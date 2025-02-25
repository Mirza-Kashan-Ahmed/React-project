import { useState } from "react";
function App() {

  // let counter = 5

  // by simple funtion
  // function increase(){
  //   useState(counter + 1);
  //   

  // }
  // function decrease(){
  //   useState(counter - 1);
  //   
  // // }

  // by fat arrow function
  // const increase = () =>{
  //   counter++;
  //   console.log(counter);
  // }

  // const decrease = () =>{
  //   counter--;
  //   console.log(counter);
  // }

  let [counter, setCounter] = useState(0)
    const increase = () =>{
      setCounter(counter + 1)
    }
  
    const decrease = () =>{
      setCounter(counter - 1)
    }
  return (
    <>
      <h1>Mirza Kashan Ahmed</h1>
      <h2>Counter Number: {counter}</h2>
      <button onClick={increase}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={decrease}>Remove Value {counter}</button>
      <br />
      <br />
      <footer>Footer:{counter}</footer>
    </>
  )
}

export default App
