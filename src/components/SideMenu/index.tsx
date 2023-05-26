import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { icons } from '@/constants/icons';
import { menuItems } from '@/constants/navigationMenu';
import { useAppDispatch } from '@/hooks';
import { signOut } from '@/store/actions/authActions';

import { Modal } from '../Modal';
import { TwitForm } from '../TwitForm';
import {
  Container,
  Icon,
  LogOutButton,
  Menu,
  MenuItem,
  MenuLink,
  MenuList,
  Text,
  TwitButton,
} from './styles';

export interface SideMenuProps {
  onDone: () => Promise<void>;
}

export const SideMenu = React.forwardRef<HTMLDivElement, SideMenuProps>(
  ({ onDone }: SideMenuProps, ref) => {
    const { pathname } = useLocation();
    const [openModal, setOpenModal] = useState(false);

    const dispatch = useAppDispatch();

    return (
      <Menu ref={ref}>
        {openModal && (
          <Modal setOpen={setOpenModal}>
            <TwitForm onDone={onDone} setOpen={setOpenModal} />
          </Modal>
        )}
        <Container>
          {icons.twitter}
          <MenuList>
            {menuItems.map(({ to, title, icon, selectedIcon }) => (
              <MenuItem key={title}>
                <MenuLink to={to}>
                  <Icon>{pathname === to ? selectedIcon : icon}</Icon>
                  <Text $isSelected={pathname === to}>{title}</Text>
                </MenuLink>
              </MenuItem>
            ))}
            <MenuItem>
              <LogOutButton onClick={() => dispatch(signOut())}>
                <Icon>{icons.logout}</Icon>
                <Text $isSelected={false}> Log out</Text>
              </LogOutButton>
            </MenuItem>
          </MenuList>
          <TwitButton onClick={() => setOpenModal(true)}>Tweet</TwitButton>
        </Container>
      </Menu>
    );
  }
);
