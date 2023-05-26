import { IUserData } from '@/types';

export interface ProfileHeaderProps {
  onProfileUpdate: () => Promise<void>;
  user: IUserData;
  onMenuOpen: () => void;
  onSearchOpen: () => void;
}
