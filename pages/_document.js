'use client'
import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">

        <Head>
          <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
          <link rel="manifest" href="/images/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#FCF9F0" />
          {/* <meta http-equiv="Refresh" content="0.1; url=http://www.pampagrillmalaga.com/" /> */}
        </Head>

        <body className='bg-off-white'>
          <Main className='bg-off-white' />
          <NextScript />
        </body>

      </Html>
    )
  }
}
