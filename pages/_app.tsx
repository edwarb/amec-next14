// _app.tsx
import "styles/globals.css";
import type { AppProps } from "next/app";
// import { Quicksand } from "next/font/google";
import { Toaster } from "components/ui/toaster";

// const inter = Quicksand({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <main className={inter.className}> */}
      <main>
        <Component {...pageProps} />
      </main>
      <Toaster />
    </>
  );
}
