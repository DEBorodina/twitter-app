import { ROUTE_NAMES } from '@/constants/routesNames';
import { FeedPage } from '@/pages/FeedPage';
import { HomePage } from '@/pages/HomePage';
import { LogInPage } from '@/pages/LogInPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SignUpPage } from '@/pages/SignUpPage';

const { SIGN_UP, LOGIN, FEED, PROFILE, HOME } = ROUTE_NAMES;

export const publicRoutes = [
  {
    path: SIGN_UP,
    component: <SignUpPage />,
  },
  {
    path: LOGIN,
    component: <LogInPage />,
  },
  {
    path: HOME,
    component: <HomePage />,
  },
];

export const privateRoutes = [
  {
    path: FEED,
    component: <FeedPage />,
  },
  {
    path: PROFILE,
    component: <ProfilePage />,
  },
];
