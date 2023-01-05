import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => (props, i) => sheet.collectStyles(<App {...props} key={i} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render(): ReactElement {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;900&display=swap" rel="stylesheet" /> */}
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#4a9885"
          href="/static/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <meta content="14d2e73487fa6c71" name="yandex-verification" />
        <meta
          content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
          name="google-site-verification"
        />

          <link rel="shortcut icon" href="/public/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="" />

          {/*<!-- Google / Search Engine Tags -->*/}
          <meta itemProp="name" content="FrontendInit | Lean.Build.Connect." />
          <meta itemProp="description" content="" />
          <meta
            itemProp="image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1670752371/Screenshot_186_lk5qov.png"
          />

          {/*<!-- Facebook Meta Tags -->*/}
          <meta property="og:title" content="FrontendInit | Lean.Build.Connect." />
          <meta property="og:description" content="FrontendInit is the community for frontend developers, providing the mentorship, roadmap, resources, hacktons, jobs, and inspiration that frontend developers need to kickstart their career." />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1670752371/Screenshot_186_lk5qov.png"
          />
          <meta property="og:url" content="https://frontendinit.com/" />
          <meta property="og:type" content="website" />

          {/*<!-- Twitter Meta Tags -->*/}
          <meta name="twitter:title" content="FrontendInit | Lean.Build.Connect." />
          <meta name="twitter:description" content="FrontendInit is the community for frontend developers, providing the mentorship, roadmap, resources, hacktons, jobs, and inspiration that frontend developers need to kickstart their career." />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1670752371/Screenshot_186_lk5qov.png"
          />
          <meta name="twitter:card" content="summary_large_image" />

          <meta
            property="og:image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1670752371/Screenshot_186_lk5qov.png"
          ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
  }
}