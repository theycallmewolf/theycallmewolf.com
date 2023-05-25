interface LocalStoreKeys {
  PWA: string;
  THEME: string;
}

type UseConfig = () => {
  LOCAL_STORE_KEY: LocalStoreKeys;
  CONFIG: {
    site: {
      name: string;
      description: string;
      url: string;
    };
    social: {
      twitter: string;
      instagram: string;
      image: string;
    };
  };
};

export const useConfig: UseConfig = () => {
  const LOCAL_STORE_KEY: LocalStoreKeys = {
    PWA: "@wolf_pwa",
    THEME: "@wolf_theme",
  };

  const CONFIG = {
    site: {
      name: "theycallmewolf",
      description: "The web portfolio of Bruno Lobato, coder + designer.",
      url: "https://www.theycallmewolf.com/",
    },
    social: {
      twitter: "",
      instagram: "",
      image:
        "https://firebasestorage.googleapis.com/v0/b/theycallmewolf.appspot.com/o/share.jpg?alt=media&token=075252b0-fba6-417f-aaff-c2053ceacfdc",
    },
  };

  return { LOCAL_STORE_KEY, CONFIG };
};
