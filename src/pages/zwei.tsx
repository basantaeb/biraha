import { usePostHog } from "@posthog/react";
import { useEffect } from "react";

export const PageZwei = () => {
  const posthog = usePostHog();

  useEffect(() => {
    posthog?.capture("zwei_page_load");
  }, []);

  return <div>Page zwei</div>;
};
