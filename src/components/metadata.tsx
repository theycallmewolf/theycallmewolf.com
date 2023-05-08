import { useTheme } from 'hooks';
import { useConfig } from 'hooks/useConfig';
import Head from 'next/head';
import { COLORS } from 'theme';

interface Props {
  title: string;
  description: string;
}

export const Metadata: React.FC<Props> = (props) => {
  return (
    <>
      <OpenGraph title={props.title} description={props.description} />
      <CommonMetas />
      <AppleSplashScreenImages />
      <GoogleTag />
      <Credits title={props.title} description={props.description} />
    </>
  );
};

const Credits: React.FC<Props> = (props) => {
  const { CONFIG } = useConfig();

  return (
    <Head>
      <title>{`${props.title} | ${CONFIG.site.name}`}</title>
      <meta name="description" content={props.description} />
      <meta name="author" content="Bruno Lobato" />
    </Head>
  );
};

const OpenGraph: React.FC<Props> = (props) => {
  const { CONFIG } = useConfig();
  return (
    <Head>
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${props.title} | ${CONFIG.site.name}`} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={CONFIG.site.name} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={CONFIG.social.twitter} />
      <meta property="twitter:title" content={`${props.title} | ${CONFIG.site.name}`} />
      <meta property="twitter:description" content={props.description} />
      <meta property="og:image" content={CONFIG.social.image} />
      <meta property="og:image:secure_url" content={CONFIG.site.url} />
      <meta property="og:image:alt" content="theycallmewolf logo" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
};

const CommonMetas: React.FC = () => {
  const { hasDarkMode } = useTheme();

  return (
    <Head>
      <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />
      <meta name="googlebot" content="index, follow" />
      <meta name="robots" content="index, all" />
      <meta name="msnbot" content="index, follow" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color={hasDarkMode ? COLORS.COSMOS_BLACK : COLORS.IRIDIUM_WHITE}
      />
      <meta
        name="msapplication-TileColor"
        content={hasDarkMode ? COLORS.COSMOS_BLACK : COLORS.IRIDIUM_WHITE}
      />
      <meta name="theme-color" content={hasDarkMode ? COLORS.COSMOS_BLACK : COLORS.IRIDIUM_WHITE} />
      {/* <meta
        name="theme-color"
        content={COLORS.IRIDIUM_WHITE}
        data-media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content={COLORS.COSMOS_BLACK}
        data-media="(prefers-color-scheme: dark)"
      /> */}
    </Head>
  );
};

const AppleSplashScreenImages: React.FC = () => (
  <Head>
    {/* <!--  640x1136 - iPhone 5 portrait --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
      href="/assets/img/apple_splash_640.jpg"
    />
    {/* <!--  1136x640 - iPhone 5 landscape --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 568px) and (device-height: 320px) and (-webkit-device-pixel-ratio: 2)"
      href="/assets/img/apple_splash_1136.jpg"
    />
    {/* <!--  750x1334 - iPhone 8, 7, 6s, 6 portrait --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
      href="/assets/img/apple_splash_750.jpg"
    />
    {/* <!--  1334x750 - iPhone 8, 7, 6s, 6 landscape --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 667px) and (device-height: 375px) and (-webkit-device-pixel-ratio: 2)"
      href="/assets/img/apple_splash_1334.jpg.jpg"
    />
    {/* <!--  1125x2436 - iPhone X portrait --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
      href="/assets/img/apple_splash_1125.jpg"
    />
    {/* <!--  2436x1125 - iPhone X landscape --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 812px) and (device-height: 375px) and (-webkit-device-pixel-ratio: 3)"
      href="/assets/img/apple_splash_2436.jpg"
    />
    {/* <!--  1242x2208 - iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus portrait --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
      href="/assets/img/apple_splash_1242.jpg"
    />
    {/* <!--  2208x1242 - iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus landscape --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 736px) and (device-height: 414px) and (-webkit-device-pixel-ratio: 3)"
      href="/assets/img/apple_splash_2208.jpg"
    />
    {/* <!--  1536x2048 - iPad Mini, Air portrait --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
      href="/assets/img/apple_splash_1536.jpg"
    />
    {/* <!--  2048x1536 - iPad Mini, Air landscape --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 1024px) and (device-height: 768px) and (-webkit-device-pixel-ratio: 2)"
      href="/assets/img/apple_splash_2048.jpg"
    />
    {/* <!-- 1668x2224 - iPad Pro 10.5" portrait --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
      href="/assets/img/apple_splash_1668.jpg"
    />
    {/* <!-- 2224x1668 - iPad Pro 10.5" landscape --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 1112px) and (device-height: 834px) and (-webkit-device-pixel-ratio: 2)"
      href="/assets/img/apple_splash_2224.jpg"
    />
    {/* <!-- 2048x2732 - iPad Pro 12.9" portrait --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
      href="/assets/img/apple_splash_2048.jpg"
    />
    {/* <!-- 2732x2048 - iPad Pro 12.9" landscape --> */}
    <link
      rel="apple-touch-startup-image"
      media="(device-width: 1366px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
      href="/assets/img/apple_splash_2732.jpg"
    />
  </Head>
);

const GoogleTag: React.FC = () => (
  <Head>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `
      }}
    />
  </Head>
);
