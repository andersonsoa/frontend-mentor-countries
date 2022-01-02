import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <div className="h-screen overflow-y-scroll scrollbar-hide">
        <Header />
        <Component {...pageProps} />
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
