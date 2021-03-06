import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide">
      <Header />

      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
