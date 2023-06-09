'use client';

import { createContext, useContext, useState } from 'react';
import { AppContextProps, ICustomer } from '@/types';

export const AppContext = createContext<AppContextProps | null>(null);

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer | null>(null);

  const toggleModal = () => {
    setModalActive((prevState) => !prevState);
  };

  const contextValue: AppContextProps = {
    modalActive,
    toggleModal,
    selectedCustomer,
    setSelectedCustomer,
    setModalActive
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
