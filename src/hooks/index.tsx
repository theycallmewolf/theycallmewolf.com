import { NavProvider } from './useNav';
import { ThemeProvider } from './useTheme';

export const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <NavProvider>{children}</NavProvider>
  </ThemeProvider>
);
