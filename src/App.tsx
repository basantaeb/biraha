import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/home";
import { PageEins } from "./pages/eins";
import { PageZwei } from "./pages/zwei";
import viteLogo from "/vite.svg";
import { usePostHog } from "@posthog/react";
import { useEffect } from "react";

function App() {
  const posthog = usePostHog();

  useEffect(() => {
    posthog?.capture("initial_page_load");
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
          <Link to="/">Home</Link> | <Link to="/eins">Eins</Link> |{" "}
          <Link to="/zwei">Zwei</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/eins" element={<PageEins />} />
          <Route path="/zwei" element={<PageZwei />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
