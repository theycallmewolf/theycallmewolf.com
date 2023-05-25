const devices = [
  "iPad Simulator",
  "iPhone Simulator",
  "iPod Simulator",
  "iPad",
  "iPhone",
  "iPod",
];

type DeviceCheck = () => {
  isAndroid: boolean;
  isIOS: boolean;
  isMobile: boolean;
};

export const deviceCheck: DeviceCheck = () => {
  const navigatorAPI = navigator || undefined;
  if (!navigatorAPI) return { isAndroid: false, isIOS: false, isMobile: false };

  const platform =
    navigator?.userAgentData?.platform || navigator?.platform || "unknown";

  const isAndroid = /(android)/i.test(navigator.userAgent);
  const isIOS =
    devices.includes(platform) ||
    (navigator.userAgent.includes("Mac") && "ontouchend" in document);

  return {
    isAndroid,
    isIOS,
    isMobile: isAndroid || isIOS,
  };
};
