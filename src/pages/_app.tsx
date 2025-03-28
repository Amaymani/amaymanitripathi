import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes"
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <title>Amay Mani Tripathi | Portfolio</title>
        <meta name="description" content="Explore the portfolio of Amay Mani Tripathi – a creative problem solver, developer, and innovator. Check out projects, skills, and more!" />
        <meta name="keywords" content="Amay Mani Tripathi, portfolio, developer, problem solver, projects, skills" />
        <meta name="author" content="Amay Mani Tripathi" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Amay Mani Tripathi | Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio! Discover my work, skills, and projects." />
        <meta property="og:image" content="https://amaymanitripathi.vercel.app/Intro.png" />
        <meta property="og:url" content="https://amaymanitripathi.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </>);
}
