interface LocalStoreKeys {
  PWA: string;
}

type UseConfig = () => {
  LOCAL_STORE_KEY: LocalStoreKeys;
};

export const useConfig: UseConfig = () => {
  const LOCAL_STORE_KEY: LocalStoreKeys = {
    PWA: '@wolf_pwa'
  };

  return { LOCAL_STORE_KEY };
};
