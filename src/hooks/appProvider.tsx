import { NavProvider } from "./useNav";
import { ThemeProvider } from "./useTheme";
import { ToastProvider } from "./useToast";

export const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <NavProvider>
      <ToastProvider>{children}</ToastProvider>
    </NavProvider>
  </ThemeProvider>
);
