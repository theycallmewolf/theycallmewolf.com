import { useToast } from "hooks";
import { useCallback, useEffect, useState } from "react";
import { NODE_DEV } from "utils/dev";
import { deviceCheck } from "utils/device-check";

import { useConfig } from "./useConfig";

const TOAST_CONTENT = {
  IOS: {
    TITLE: "Have an app-like experience!",
    DESCRIPTION: 'Tap on the share button below, then "Add to Home screen".',
  },
  ANDROID: {
    TITLE: "Have an app-like experience!",
    DESCRIPTION:
      'Open the "More" menu by tapping on the three vertical dots button (top right), then "Add to Home screen".',
  },
};

type UsePWABanner = () => { checkPWABanner: () => void };

export const usePWABanner: UsePWABanner = () => {
  const { LOCAL_STORE_KEY } = useConfig();
  const { addToast, hasClosed } = useToast();

  const [toastID, setToastID] = useState<string>();

  const checkPWABanner = useCallback(() => {
    const hasSeenBanner = localStorage.getItem(LOCAL_STORE_KEY.PWA);

    const diffTime = Math.abs(Date.now() - Number(hasSeenBanner));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 30) localStorage.removeItem(LOCAL_STORE_KEY.PWA);

    if (hasSeenBanner) return;

    setTimeout(
      () => {
        if (toastID) return;

        const { isMobile, isAndroid, isIOS } = deviceCheck();
        NODE_DEV && console.log("is Android:", isAndroid, "is IOS:", isIOS);

        if (!isMobile) return;

        const isInstalled = window.matchMedia(
          "(display-mode: standalone)"
        ).matches;
        if (isInstalled) return;

        const DEVICE = isIOS ? "IOS" : "ANDROID";

        const { id } = addToast({
          title: TOAST_CONTENT[DEVICE].TITLE,
          description: TOAST_CONTENT[DEVICE].DESCRIPTION,
          type: "info",
          duration: 60 * 1000,
        });

        setToastID(id);
      },
      NODE_DEV ? 1000 : 1000 * 45
    );
  }, [LOCAL_STORE_KEY.PWA, addToast, toastID]);

  useEffect(() => {
    const { status, id } = hasClosed;
    if (status && toastID === id)
      localStorage.setItem(LOCAL_STORE_KEY.PWA, String(Date.now()));
  }, [LOCAL_STORE_KEY.PWA, hasClosed, toastID]);

  return { checkPWABanner };
};
