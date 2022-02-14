

import React from 'react';

export default function GenericComp<T extends {}>({data,updateFunc}:GenericType<T>) {
  return <div></div>;
}


type GenericType<T> = {
    data:T[]
    updateFunc:(arr:T)=>void
}