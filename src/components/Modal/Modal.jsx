import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

// import Sprite from '../../images/sprite.svg';

import {
  Backdrop,
  ModalWindow,
  // ModalCloseBtn,
  // CloseIcon,
} from './Modal.styled';

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
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        {/* <ModalCloseBtn type="button" onClick={closeModal}>
          <CloseIcon width="24" height="24">
            <use href={`${Sprite}#icon-cross`} />
          </CloseIcon>
        </ModalCloseBtn> */}
        <div>{children}</div>
      </ModalWindow>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
};
