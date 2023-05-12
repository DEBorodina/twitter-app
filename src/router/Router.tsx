import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTE_NAMES } from '@/constants/routesNames';
import { FeedPage } from '@/pages/FeedPage';
import { LogInPage } from '@/pages/LogInPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SignUpPage } from '@/pages/SignUpPage';

export const Router: React.FC = () => (
  <Routes>
    <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpPage />} />
    <Route path={ROUTE_NAMES.LOGIN} element={<LogInPage />} />
    <Route path={ROUTE_NAMES.FEED} element={<FeedPage />} />
    <Route path={ROUTE_NAMES.PROFILE} element={<ProfilePage />} />
    <Route
      path="*"
      element={<Navigate to={ROUTE_NAMES.SIGN_UP} replace={true} />}
    />
  </Routes>
);
