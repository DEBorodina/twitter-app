import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { usePopup } from '@/hooks';

import { ModalWindow, OverLay } from './styles';
import { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({ children, setOpen }) => {
  const [ref, isOpenPopUp] = usePopup(true);

  useEffect(() => {
    setOpen(isOpenPopUp);
  }, [isOpenPopUp, setOpen]);

  return createPortal(
    isOpenPopUp && (
      <OverLay>
        <ModalWindow ref={ref as React.RefObject<HTMLDivElement>}>
          {children}
        </ModalWindow>
      </OverLay>
    ),
    document.getElementById('portal')!
  );
};
