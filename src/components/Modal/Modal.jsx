import { useState } from 'react';

import Sprite from '../../images/sprite.svg';

export const Modal = ({children, closeModal}) => {

  return (
    <div style={{backgroungColor: "gray", width: 300, height: 500}}>
      <button type="button" onClick={closeModal} style={{padding: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "none", backgroundColor: "transparent"}}>
        <svg width="24" height="24" style={{fill: "#4C4B4B"}}>
          <use  href={`${Sprite}#icon-cross`} />
        </svg>
      </button>
      <div>{children}</div>
    </div>
  )
}