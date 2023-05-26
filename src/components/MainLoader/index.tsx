import { isLoaded } from 'react-redux-firebase';

import { Loader } from '@/components/Loader';
import { useAppSelector } from '@/hooks';

import { LoaderContainer } from './styles';
import { MainLoaderProps } from './types';

export const MainLoader: React.FC<MainLoaderProps> = ({ children }) => {
  const auth = useAppSelector((state) => state.firebase.auth);

  if (!isLoaded(auth))
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  return children;
};
