import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/home";
import { PageOne } from "./pages/one";
import { PageTwo } from "./pages/two";
import viteLogo from "/vite.svg";
import { usePostHog } from "@posthog/react";
import { useEffect } from "react";

function App() {
  const INACTIVITY_LIMIT = 30 * 60 * 1000;
  const posthog = usePostHog();

  useEffect(() => {
    posthog?.capture("web_app_visited");
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        posthog.capture("app_backgrounded");
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    const now = Date.now();
    const lastActive = localStorage.getItem("last_active");

    if (!lastActive || now - Number(lastActive) > INACTIVITY_LIMIT) {
      posthog.capture("app_opened");
    }

    localStorage.setItem("last_active", now.toString());
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <p>प्रकाश : प्रकाश कहाँ छ र ?</p>
      </div>

      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/one">One</Link> |{" "}
          <Link to="/two">Two</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/one" element={<PageOne />} />
          <Route path="/two" element={<PageTwo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
