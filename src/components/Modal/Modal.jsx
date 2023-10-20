import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import Sprite from '../../images/sprite.svg';


export const Modal = ({ children, closeModal }) => {

  const handleKeyDown = useCallback (e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  const handleBackdropClick = useCallback (e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }, [closeModal])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <div onClick={handleBackdropClick}>
      <div style={{ backgroundColor: 'gray', width: 300, height: 200 }}>
        <button
          type="button"
          onClick={closeModal}
          style={{
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            backgroundColor: 'transparent',
          }}
        >
          <svg width="24" height="24" style={{ fill: '#4C4B4B' }}>
            <use href={`${Sprite}#icon-cross`} />
          </svg>
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
};
