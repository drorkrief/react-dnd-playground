import React,{useState} from "react";
import { useDrop } from "react-dnd";
import Divs from "./Divs";

function Board() {
    const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addImageToBoard = (id) => {
    // const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [ id]);
  };
  return (
    <div
      ref={drop}
      style={{
        background: "green",
        height: "20%",
        width: "20%",
        display: "block",
        position: "absolute",
      }}
    >
        {board.map((it)=> <Divs key={it} colors={it}/>)}
    </div>
  );
}

export default Board;
