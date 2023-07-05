import { RootStoreProvider } from "@/hooks/RootStoreProvider";
import "@/styles/index.scss";
import "locomotive-scroll/src/locomotive-scroll.scss";

import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    const s = document.querySelector("html");
    if (!s) return;
    (s as any).style.setProperty("--viewport-height", `${vh}px`);

    window.addEventListener("resize", function (e) {
      let vh = window.innerHeight * 0.01;
      (s as any).style.setProperty("--viewport-height", `${vh}px`);
    });

    console.clear();
    console.log = function () {};
  }, []);
  return (
    <RootStoreProvider hydrationData={pageProps?.hydrationData}>
      <Component {...pageProps} />
    </RootStoreProvider>
  );
}
