import React, { createContext, useContext, useState } from 'react';

interface NavContextData {
  isOpen: boolean;
  toggleNav(): void;
}

const NavContext = createContext<NavContextData>({} as NavContextData);

const NavProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  return <NavContext.Provider value={{ toggleNav, isOpen }}>{children}</NavContext.Provider>;
};

function useNav(): NavContextData {
  const context = useContext(NavContext);
  if (!context) throw Error('the hook useNav must be used inside a NavProvider');
  return context;
}

export { NavProvider, useNav };
