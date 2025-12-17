import { usePostHog } from "@posthog/react";
import { useEffect } from "react";

export const PageOne = () => {
  const posthog = usePostHog();

  useEffect(() => {
    posthog?.capture("page_one_loaded");
  }, []);

  return <div>Page One</div>;
};
