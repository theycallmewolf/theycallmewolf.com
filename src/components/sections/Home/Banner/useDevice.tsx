import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { deviceCheck } from "utils";

interface DeviceData {
  device: "desktop" | "mobile";
  safeMode: boolean; // use to debug the "A problem repeatedly occurred" issue
}

const DeviceContext = createContext<DeviceData>({} as DeviceData);

const DeviceProvider: React.FC = ({ children }) => {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [safeMode, setSafeMode] = useState(false);

  const handleDevice = useCallback(() => {
    const { isMobile, isIOS } = deviceCheck();
    setDevice(isMobile ? "mobile" : "desktop");
    setSafeMode(isIOS);
  }, []);

  useEffect(() => {
    handleDevice();
  }, [handleDevice]);

  return (
    <DeviceContext.Provider
      value={{
        device,
        safeMode,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

const useDevice = (): DeviceData => {
  const context = useContext(DeviceContext);
  if (!context)
    throw Error("the hook useDevice must be used inside a DeviceProvider");
  return context;
};

export { DeviceProvider, useDevice };
