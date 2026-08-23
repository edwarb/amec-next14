// _app.tsx
import "styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next/pages";
import { Toaster } from "components/ui/toaster";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
      <Toaster />
    </>
  );
}

export default appWithTranslation(App);
