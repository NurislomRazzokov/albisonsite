import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Head from "next/head";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Albison Academy",
  icons: {
    icon: "/logo.svg",
  },
  description:
    "Toshkentda professional IT treyning markazi | Albison - 2020 yildan beri o'z faoliyatini yurg'izib kelmoqda. IT Kurslar boshidan boshlab o'rgatiladi va ishga kirguncha qo’llab-quvvatlanadi. Online o'qish imkoniyati ham bor. Bepul ochiq darslar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <Head>
          <link rel="icon" href="/logo.svg" />
          {/* Google Analytics tracking code */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-93WN9M8Y8G"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-9TKY3GHRS9');
            `,
            }}
          ></script>
        </Head>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-9TKY3GHRS9"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-9TKY3GHRS9');
// </script>
