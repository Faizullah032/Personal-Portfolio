// app/layout.js
import "./globals.css";
import Header from "./components/Header/Header";
import Script from 'next/script';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Personal Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: "Portfolio, Personal, Web Development",
  authors: [
    {
      name: "Faizullah Laghari",
      url: "https://3d-portfolio-pearl-seven.vercel.app",
    },
  ],
  creator: "Faizullah Laghari",
  publisher: "Faizullah Laghari",
  description: "A personal portfolio website showcasing my skills and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Script src="/scripts/global.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}