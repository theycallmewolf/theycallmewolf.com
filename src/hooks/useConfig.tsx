interface LocalStoreKeys {
  PWA: string;
  THEME: string;
}

type UseConfig = () => {
  LOCAL_STORE_KEY: LocalStoreKeys;
};

export const useConfig: UseConfig = () => {
  const LOCAL_STORE_KEY: LocalStoreKeys = {
    PWA: '@wolf_pwa',
    THEME: '@wolf_theme'
  };

  return { LOCAL_STORE_KEY };
};
