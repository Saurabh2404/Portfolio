import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Portfolio of Saurabh Kumar Singh, a full stack developer focused on MERN apps, APIs, payments, machine learning, and practical web products."
        />
        <meta name="theme-color" content="#f97316" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var theme=localStorage.getItem('theme');if(theme===null||theme==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){document.documentElement.classList.add('dark')}",
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
