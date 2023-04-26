const devices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];

type DeviceCheck = () => {
  isAndroid: boolean;
  isIOS: boolean;
};

export const deviceCheck: DeviceCheck = () => {
  if (!navigator) return { isAndroid: false, isIOS: false };

  const platform = navigator?.userAgentData?.platform || navigator?.platform || 'unknown';

  return {
    isAndroid: /(android)/i.test(navigator.userAgent),
    isIOS:
      devices.includes(platform) ||
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  };
};
