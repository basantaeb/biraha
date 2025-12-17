import { usePostHog } from "@posthog/react";
import { useEffect } from "react";

export const PageTwo = () => {
  const posthog = usePostHog();

  useEffect(() => {
    posthog?.capture("page_two_loaded");
  }, []);

  return <div>Page Two</div>;
};
