import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div>
      <h1>Hi \o/</h1>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal; 