import { useState } from "react";
function App() {
  let [color, setcolor] = useState("black");

  return (
    <div className="main-container"
    style={{
      backgroundColor: color
    }}>

        <div className="nav">
          <button classname="btns"
          onClick={()=>{setcolor("red")}}
          style={{backgroundColor: "red"}}
          >Red</button>
          <button classname="btns"
          onClick={()=>{setcolor("green")}}
          style={{backgroundColor: "green"}}
          >Green</button>
          <button classname="btns"
          onClick={()=>{setcolor("blue")}}
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button classname="btns"
          onClick={()=>{setcolor("orange")}}
          style={{backgroundColor: "orange"}}
          >Orange</button>
          <button classname="btns"
          onClick={()=>{setcolor("black")}}
          style={{backgroundColor: "black"}}
          >Black</button>
          <button classname="btns"
          onClick={()=>{setcolor("purple")}}
          style={{backgroundColor: "purple"}}
          >Purple</button>
          <button classname="btns"
          onClick={()=>{setcolor("gray")}}
          style={{backgroundColor: "gray"}}
          >Gray</button>
          <button classname="btns"
          onClick={()=>{setcolor("brown")}}
          style={{backgroundColor: "brown"}}
          >Brown</button>
          <button classname="btns"
          onClick={()=>{setcolor("violet")}}
          style={{backgroundColor: "violet"}}
          >Violet</button>
        </div>
    </div>
  );
}
export default App;