import React from 'react';
import './index.css'

function Click(props) {
  return (
      <button className="square" onClick={() => props.onClick()}>
        {props.value}
      </button>
  );
}

export default Click;