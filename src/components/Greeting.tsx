import React, { ButtonHTMLAttributes } from "react";

   
   export default function Greeting(props:handleClick) {
    
    return <div>
<button onClick={(event)=> props.message(event,"lucky")}>click me!</button>
     </div>  

   }

type handleClick = {
  message:(event:React.MouseEvent<HTMLButtonElement>,username:string)=>void,
}