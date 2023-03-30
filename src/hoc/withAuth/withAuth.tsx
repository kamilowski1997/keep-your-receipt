import React, { FC, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useDispatch } from '../../redux/store';
import { actions } from '../../redux/slices/auth';

const withAuth = (Component: FC<any>) => (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user && user.email) {
        dispatch(actions.setUser({ id: user.uid, email: user.email }));
      } else {
        dispatch(actions.clearUser());
      }
    });
  }, [dispatch]);

  return <Component {...props} />;
};

export default withAuth;
