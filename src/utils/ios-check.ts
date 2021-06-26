export const deviceCheck = (): { isAndroid: boolean; isIOS: boolean } => {
  const isAndroid = /(android)/i.test(navigator.userAgent);
  const isIOS =
    ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
      navigator.platform
    ) ||
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

  return { isAndroid, isIOS };
};

export const iOSCheck = (): boolean => {
  const devices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];
  return (
    devices.includes(navigator.platform) ||
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document) // iPad on iOS 13 detection
  );
};
