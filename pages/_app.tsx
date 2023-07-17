import { useEffect } from "react";
import "@aura-design/system/main.css";
import type { AppProps } from "next/app";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { useRouter } from "next/router";
import * as Phanthom from "phantom-client";

import "@/styles/globals.css";
import "@/styles/main.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    Phanthom.load(process.env.NEXT_PUBLIC_PHANTOM_SITE_CODE as string, {
      includedDomains: ["pablopvsky.com"],
      accessToken: process.env.NEXT_PUBLIC_FAUNA_SECRET as string,
    });

    function onRouteChangeComplete() {
      Phanthom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <PrismicPreview repositoryName={repositoryName}>
      <Component {...pageProps} />
    </PrismicPreview>
  );
}
