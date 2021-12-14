import { useState } from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Divs from "./Divs";
import Board from "./Board";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
     {["tan", "aqua", "greenyellow", "yellow", "violet"].map((item,i) => <Divs key={i} colors={item}/>)}
     </div>
        {/* <Divs/> */}
        <h2>put a div here</h2>
        <Board/>
        </div>
    </DndProvider>
  );
}

export default App;
