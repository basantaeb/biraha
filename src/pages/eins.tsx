import { usePostHog } from "@posthog/react";
import { useEffect } from "react";

export const PageEins = () => {
  const posthog = usePostHog();

  useEffect(() => {
    posthog?.capture("eins_page_load");
  }, []);

  return <div>Page Eins</div>;
};
