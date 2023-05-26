import { icons } from './icons';
import { ROUTE_NAMES } from './routesNames';

export const menuItems = [
  {
    title: 'Home',
    to: ROUTE_NAMES.FEED,
    icon: icons.home,
    selectedIcon: icons.selectedHome,
  },
  {
    title: 'Explore',
    to: '#',
    icon: icons.explore,
    selectedIcon: icons.selectedExplore,
  },
  {
    title: 'Notifications',
    to: '#',
    icon: icons.notifications,
    selectedIcon: icons.selectedNotifications,
  },
  {
    title: 'Bookmarks',
    to: '#',
    icon: icons.bookmarks,
    selectedIcon: icons.selectedBookmarks,
  },
  {
    title: 'Lists',
    to: '#',
    icon: icons.lists,
    selectedIcon: icons.selectedLists,
  },
  {
    title: 'Profile',
    to: ROUTE_NAMES.PROFILE,
    icon: icons.profile,
    selectedIcon: icons.selectedProfile,
  },
  {
    title: 'More',
    to: '#',
    icon: icons.more,
    selectedIcon: icons.more,
  },
];
