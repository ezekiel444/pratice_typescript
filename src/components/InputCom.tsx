import React, { ButtonHTMLAttributes } from "react";

   
   export default function InputCom(props:handleClick) {
    

    return <div>
        <input type="text" value={props.inputString} onChange={(event)=>props.input(event)} />
     </div>  

   }

type handleClick = {
input:(event:React.ChangeEvent<HTMLInputElement>)=>void,
inputString:""
}