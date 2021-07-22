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
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#111517" />
          <meta name="msapplication-TileColor" content="#111517" />
          <meta name="theme-color" content="#111517" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
          <meta name="google" content="notranslate" />
          <meta name="googlebot" content="index, follow" />
          <meta name="robots" content="index, all" />
          <meta name="msnbot" content="index, follow" />
          <meta property="og:title" content="They Call Me Wolf" />
          <meta
            property="og:description"
            content="The web portfolio of Bruno Lobato, a designer since 2001 that felt in love with coding around 2014."
          />
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="https://www.theycallmewolf.com/" />
          <meta property="og:image" content="https://i.ibb.co/8K9Ly43/share.jpg" />
          <meta property="og:image:secure_url" content="https://www.theycallmewolf.com/" />
          <meta property="og:image:alt" content="thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link
            href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@300;700&display=swap"
            rel="stylesheet"
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
