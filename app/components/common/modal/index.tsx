import React, { useEffect } from 'react';
import { SCROLL_DISABLED_CLASS } from '@/app/constants';
import Close from '../icons/Close';
import './modal.scss';

type ModalProps = {
  handleClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ children, handleClose }: ModalProps) => {
  useEffect(() => {
    document.documentElement.classList.add(SCROLL_DISABLED_CLASS);

    return () => document.documentElement.classList.remove(SCROLL_DISABLED_CLASS);
  }, []);

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close-button">
          <button type="button" onClick={handleClose}>
            <Close />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
