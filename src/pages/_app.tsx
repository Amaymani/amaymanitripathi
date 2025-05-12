import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes"
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <title>Amay Mani Tripathi | Portfolio</title>
        <meta name="description" content="Amay Mani Tripathi - Developer, problem solver, and innovator. View my portfolio, skills, and featured projects. | Portfolio, LinkedIn" />
        <meta name="keywords" content="Amay Mani Tripathi,  software developer, portfolio, projects, JavaScript, web developer, frontend, backend" />
        <meta name="author" content="Amay Mani Tripathi" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Amay Mani Tripathi | Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio! Discover my work, skills, and projects." />
        <meta property="og:image" content="https://amaymanitripathi.vercel.app/Intro.png" />
        <meta property="og:url" content="https://amaymanitripathi.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="me" href="https://www.linkedin.com/in/amaymanitripathi" />

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
