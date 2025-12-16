import { useEffect, useState } from "react";
import { usePostHog } from "@posthog/react";

export const HomePage = () => {
  const [count, setCount] = useState(0);
  const posthog = usePostHog();

  useEffect(() => {
    posthog?.capture("home_page_load");
  }, []);

  function increaseCount() {
    posthog?.capture("clicked_increase_count");
    setCount(count + 1);
  }

  function resetCount() {
    posthog?.capture("clicked_reset_count");
    setCount(0);
  }

  return (
    <>
      <h1>count is {count}</h1>
      <div className="card">
        <div className="cta-wrapper">
          <button onClick={increaseCount}>increase count</button>

          <button onClick={resetCount}>reset count</button>
        </div>
      </div>
    </>
  );
};
