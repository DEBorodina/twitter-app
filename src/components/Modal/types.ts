import { ReactElement } from 'react';

export interface ModalProps {
  setOpen: (open: boolean) => void;
  children: ReactElement;
}
