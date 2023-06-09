import { Dispatch, SetStateAction } from 'react';
import { ICustomer } from './content';

export type AppContextProps = {
  modalActive: boolean;
  selectedCustomer: ICustomer | null;
  toggleModal: () => void;
  setSelectedCustomer: Dispatch<SetStateAction<ICustomer | null>>;
  setModalActive: Dispatch<SetStateAction<boolean>>;
};
