import React, { createContext, FC, useEffect, useMemo, useState } from "react";

enum Role {
  USER = "USER",
  STUDENT = "STUDENT",
  TUTOR = "TUTOR",
  ADMIN = "ADMIN",
}

type User = {
  id: string;
  email: string;
  userAvatarUrl?: string;

  hashedPassword: string;
  salt: string;
  resetToken?: string;

  resetTokenExpiresAt?: string; //?
  userAccountCreatedAt?: string; //?
  userAccountUpdatedAt?: string; //?

  userAccountActivated?: boolean; //?
  userAccountSuspended?: boolean; //?
  userAccountTerminated?: boolean; //?

  userAccountTerminationReason?: string; //?

  name?: string;
  bio?: string;
  roles: Role;
  appInterfaceDesign: string;
};

interface IContext {
  user: User | null;
  isLoading: boolean;
  register: (email: string, password: string, role?: Role) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true); // можно убрать
  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (
    email: string,
    password: string,
    role = Role.USER
  ) => {
    setIsLoading(true);
    try {
      console.log("регистрация...");
      // запрос на регистрацию await
    } catch (e: any) {
      console.log("Error registration: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      console.log("вход...");
    } catch (e: any) {
      console.log("Error authorization: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      // запрос на логаут await
    } catch (e: any) {
      console.log("Error logout: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      user,
      isLoading,
      login: loginHandler,
      logout: logoutHandler,
      register: registerHandler,
    }),
    [user, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
