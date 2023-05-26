import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTE_NAMES } from '@/constants/routesNames';
import { useAppSelector } from '@/hooks';

import { privateRoutes, publicRoutes } from './routes';

export const Router: React.FC = () => {
  const { HOME, FEED } = ROUTE_NAMES;

  const userId = useAppSelector((state) => state.firebase.auth.uid);

  return (
    <Routes>
      {userId
        ? privateRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))
        : publicRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
      <Route
        path="*"
        element={<Navigate to={userId ? FEED : HOME} replace />}
      />
    </Routes>
  );
};
