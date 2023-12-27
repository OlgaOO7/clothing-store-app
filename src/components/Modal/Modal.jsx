import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import Sprite from '../../images/sprite.svg';

export const Modal = ({ children, closeModal }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleBackdropClick = useCallback(
    e => {
      if (e.currentTarget === e.target) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <div
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        top: '100px',
        right: '64px',
        width: '100%',
        height: '100%',
        zIndex: '1002',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          position: 'relative',
          right: '10px',
          backgroundColor: '#fff',
          width: 437,
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          // height: 487,
        }}
      >
        <button
          type="button"
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '8px',
            right: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
            padding: 0,
            border: 'none',
            backgroundColor: 'transparent',
          }}
        >
          <svg width="24" height="24" style={{ fill: '#eee' }}>
            <use href={`${Sprite}#icon-cross`} />
          </svg>
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
};
