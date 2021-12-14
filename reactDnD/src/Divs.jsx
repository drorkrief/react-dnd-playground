import React from 'react'
import { useDrag } from "react-dnd";

function Divs({colors}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: colors },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
    return (
        <div  ref={drag} style={{background:colors, width:"100px", height:"100px", margin:"20px"}}>
            the color is {colors}
        </div>
    )
}

export default Divs
