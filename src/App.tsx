import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { usePostHog } from "@posthog/react";

function App() {
  const [count, setCount] = useState(0);
  const posthog = usePostHog();

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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <p>प्रकाश : प्रकाश कहाँ छ र ?</p>
      </div>

      <h1>count is {count}</h1>
      <div className="card">
        <div className="cta-wrapper">
          <button onClick={increaseCount}>increase count</button>

          <button onClick={resetCount}>reset count</button>
        </div>
      </div>
    </>
  );
}

export default App;
