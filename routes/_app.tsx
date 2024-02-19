import { type PageProps } from "$fresh/server.ts";
import Header from "@components/Header.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang={"en"}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Konichiwa, I'm akumarujon, self-taught Developer from Uzbekistan. This is my personal website. You can find more information about me here."
        />
        <meta
          name="og:description"
          content="Konichiwa, I'm akumarujon, self-taught Developer from Uzbekistan. This is my personal website. You can find more information about me here."
        />
        <meta name="og:site_name" content="akumarujon UwU" />
        <meta name="og:url" content="https://akumarujon.uz" />
        <meta name="og:image" content="https://akumarujon.uz/og.png" />
        <meta name="twitter:image" content="https://akumarujon.uz/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>akumarujon</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/font.css" />
        <link rel="canonical" href="https://akumarujon.uz" />
      </head>
      <body>
        <Header />
        <Component />

        <script
          type="module"
          src="/dark.js"
        >
        </script>
      </body>
    </html>
  );
}
