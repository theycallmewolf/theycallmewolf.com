import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
          <meta name="google" content="notranslate" />
          <meta name="googlebot" content="index, follow" />
          <meta name="robots" content="index, all" />
          <meta name="msnbot" content="index, follow" />
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="they call me <wolf />" />
          <meta property="og:title" content="they call me <wolf />" />
          <meta
            property="og:description"
            content="The web portfolio of Bruno Lobato, coder + designer."
          />
          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/theycallmewolf.appspot.com/o/share.jpg?alt=media&token=075252b0-fba6-417f-aaff-c2053ceacfdc"
          />
          <meta property="og:image:secure_url" content="https://www.theycallmewolf.com/" />
          <meta property="og:image:alt" content="thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="author" content="Bruno | theycallmewolf.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@300;700&display=swap"
            rel="stylesheet"
          />
          {/* <!-- apple splash screen images --> */}
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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
