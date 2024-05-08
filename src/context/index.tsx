import React, {ReactNode, createContext, useState} from 'react';

interface AuthType {
  isLoading: boolean;
  userToken: string | null;
  Login: () => void;
  Logout: () => void;
}
export const AuthContext = createContext({} as AuthType);

const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userToken, setUserToken] = useState<string | null>('userni');

  function Login() {
    setUserToken('user');
    setIsLoading(false);
  }
  function Logout() {
    setUserToken(null);
    setIsLoading(false);
  }

  return (
    <AuthContext.Provider value={{isLoading, userToken, Login, Logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
