import { NavProvider } from './useNav';

export const AppProvider: React.FC = ({ children }) => <NavProvider>{children}</NavProvider>;
