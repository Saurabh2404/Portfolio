import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Inter&family=Playfair+Display&family=Roboto&display=swap"
          rel="stylesheet"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@500&family=Noto+Sans:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins&family=Roboto+Slab:wght@100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />

        <script
          async
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-NJGP6TPLQY"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NJGP6TPLQY', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Disable right-click globally */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('contextmenu', function(e) {
                e.preventDefault(); // Disable right-click
              });
            `,
          }}
        />
      </Head>

      <body className="font-mukta">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
