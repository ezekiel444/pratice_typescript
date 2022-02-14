

import React from 'react';
import { NameCom } from './DynamicComponent';
import Login from './Login';

export default function Profile({login,component:Component}:ComponentType) {
    if(login){
        <Login/>
    }
  return <div>
      <Component name='matomi' />
  </div>;
}

type ComponentType = {
    login:boolean,
    component:React.ComponentType<NameCom>
}