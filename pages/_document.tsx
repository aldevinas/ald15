import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {  
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@500&display=swap" rel="stylesheet"/>
          <meta name="description" content="front end web developer portfolio"/>
          <meta name="keywords" content="front end web developer in Vilnius"/>
          <meta name="author" content="Aldevinas Mikalauskas"/>
        </Head>
        <body className="bg-gradient-to-r from-purple-500 to-blue-600 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;