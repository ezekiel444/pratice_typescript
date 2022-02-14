

import React, { useEffect, useRef } from 'react';

type Reftype = {
    
}

export default function UserRef() {

    const ref = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        ref.current?.focus()
    },[])

  return <div>
      <input type="text" ref={ref} />
  </div>;
}
