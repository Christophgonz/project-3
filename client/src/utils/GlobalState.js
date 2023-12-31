import React, { createContext, useContext, useState } from 'react';

const profileContext = createContext();

const { Provider } = profileContext;

const ProfileProvider = ({ value = [], ...props }) => {
  const [profile, setProfile] = useState({
    _id: '',
    username: '',
    savedLocations: [],
  });

  return <Provider value={[profile, setProfile]} {...props} />;
};

const useProfileContext = () => {
  return useContext(profileContext);
};

export { ProfileProvider, useProfileContext };
