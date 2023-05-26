import { SideMenuProps } from '../SideMenu/types';

export interface AddTwitProps {
  text: string;
  image: FileList;
}

export interface TwitFormProps extends SideMenuProps {
  setOpen: (open: boolean) => void;
  onDone: () => Promise<void>;
}
