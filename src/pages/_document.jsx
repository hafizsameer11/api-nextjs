/* eslint-disable @next/next/google-font-display */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
    
      </Head>
      <body id='page-top'>
        <Main />
        <NextScript />
        {/* Custom JS files */}
        <script src="/js/bootstrap.bundle.min.js"></script>
        <script src="/js/gumshoe.polyfills.min.js"></script>

        <script src="/js/contact.js"></script>

        <script src="/js/feather.min.js"></script>
        <script src="/https://unicons.iconscout.com/release/v3.0.6/script/monochrome/bundle.js"></script>

        <script src="/js/tiny-slider.js "></script>
        <script src="/js/tiny-slider-init.js "></script>
        <script src="/js/tobii.min.js"></script>

        <script src="/js/app.js"></script>
      </body>
    </Html>
  )
}