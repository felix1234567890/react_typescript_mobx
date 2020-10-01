import { UserStore } from "./UserStore";
import React, { createContext, PropsWithChildren, useContext } from "react";

const RootStateContext = createContext({} as UserStore);
const userStore = new UserStore();
export const RootStateProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <RootStateContext.Provider value={userStore}>
      {children}
    </RootStateContext.Provider>
  );
};
export const useRootStore = () => useContext(RootStateContext);
