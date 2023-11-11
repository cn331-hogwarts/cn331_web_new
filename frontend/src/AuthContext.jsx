import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const login = (userData) => {
    setCurrentUser(true);
    setUsername(userData.username);
    setEmail(userData.email);
  };

  const logout = () => {
    setCurrentUser(false);
    setUsername('');
    setEmail('');
  };

  return (
    <AuthContext.Provider value={{ currentUser, username, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);