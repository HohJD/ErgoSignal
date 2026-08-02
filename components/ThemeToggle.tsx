"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("theme-light", theme === "light");
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const preferredTheme: Theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    setTheme(preferredTheme);
    applyTheme(preferredTheme);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  }

  const isLight = theme === "light";

  return <button
    type="button"
    onClick={toggleTheme}
    aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    aria-pressed={isLight}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[.03] text-cloud transition hover:border-mint/60 hover:text-mint focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 focus:ring-offset-ink"
  >
    {isLight ? <span aria-hidden className="text-lg leading-none">☾</span> : <span aria-hidden className="text-base leading-none">☀</span>}
  </button>;
}
