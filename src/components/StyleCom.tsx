

import React from 'react';

export default function StyleCom(props:styleContainer) {
  return <div style={props.design}>hello world</div>;
}


type styleContainer = {
    design:React.CSSProperties
}