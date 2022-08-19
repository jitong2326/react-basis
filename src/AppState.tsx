import React, { useState } from "react";

interface AppStateValue {
  userName: string;
  shoppingCart: {
    items: { id: number; name: string }[];
  };
}
interface HeaderProps {
  children: any;
}
const defaultContextValue: AppStateValue = {
  userName: "寂桐",
  shoppingCart: {
    items: [],
  },
};

export const appContext = React.createContext(defaultContextValue);
export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);

export const AppStateProvider: React.FC<HeaderProps> = ({ children }) => {
  const [state, setState] = useState(defaultContextValue);
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  );
};
