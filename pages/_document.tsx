import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import Script from 'next/script'
import { ReactElement } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props, i) =>
            sheet.collectStyles(<App {...props} key={i} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render(): ReactElement {
    return (
      <Html lang='en'>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' href='/icon-192x192.png' />
          <meta name='theme-color' content='#0061d7' />
          <script
            src='//code.tidio.co/w7e0btd8vim9ipt6njaxfw8v7b2ksdqu.js'
            async></script>
          {/* <Script
            async
            src={`//code.tidio.co/w7e0btd8vim9ipt6njaxfw8v7b2ksdqu.js`}></Script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
