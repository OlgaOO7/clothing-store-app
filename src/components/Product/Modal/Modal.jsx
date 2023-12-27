import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import Sprite from '../../../images/sprite.svg';

import {
  ButtonClose,
  IconClose,
  ModalBackdrop,
  ModalContent,
} from './Modal.styled';

export const Modal = ({ children, toggleModal, openModal }) => {
  useEffect(() => {
    if (openModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    window.addEventListener('keydown', clickCloseModal);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', clickCloseModal);
    };
  });
  const clickCloseModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      return toggleModal();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={clickCloseModal}>
      <ModalContent>
        <ButtonClose onClick={toggleModal}>
          <IconClose>
            <use href={`${Sprite}#icon-cross`} />
          </IconClose>
        </ButtonClose>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    document.querySelector('#modal-root')
  );
};
