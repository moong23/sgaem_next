import Topbar from "@/components/Topbar";
import Bottombar from "@/components/Bottombar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Topbar />
      <Component {...pageProps} />
      <Bottombar />
    </>
  );
}
