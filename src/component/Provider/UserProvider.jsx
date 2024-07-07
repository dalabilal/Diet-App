import React, { useState } from 'react';

export const UserContext = React.createContext(null);

/**
 * @param {{
 *  children: React.ReactNode;
 * }} props Component props
 * @returns 
 */
const UserProvider = (props) => {
  const initialUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);

  const setUserOverride = user => {
    setUser(user);

    if (user === null) {
      localStorage.removeItem('user');
    } else {
      localStorage.setItem('user', JSON.stringify(user));
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser: setUserOverride }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;