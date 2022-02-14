

import React, { useEffect, useRef, useState } from 'react';

export default function Timer() {

    const [timer,setTimer] = useState(0)
    const refTimer = useRef< number | undefined>(undefined)

    const stopTimer = ()=>{
        window.clearInterval(refTimer.current)
    }



    useEffect(()=>{
        refTimer.current =  window.setInterval(()=>{
            setTimer(prevTim=>prevTim + 1)
        },1000)

        return ()=>{
            stopTimer()
        }
        
    },[])

  return <div>
Timer --- {timer}

<button onClick={()=>stopTimer()}>stop timer</button>

  </div>;
}
