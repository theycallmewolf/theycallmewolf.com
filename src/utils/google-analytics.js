// log the pageView with their URL
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const pageView = (url) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
