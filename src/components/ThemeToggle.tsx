"use client";

import { Moon, Sun } from "lucide-react";

import { labels } from "@/data/site";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

import { iconButton } from "./buttons";

/**
 * The current theme lives on <html class="dark"> (set before paint by the inline script),
 * so this button needs no React state: both icons render and CSS shows the right one.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next: Theme = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  };

  return (
    <button type="button" onClick={toggle} className={iconButton} aria-label={labels.toggleTheme}>
      <Sun className="hidden h-[18px] w-[18px] dark:block" aria-hidden="true" />
      <Moon className="h-[18px] w-[18px] dark:hidden" aria-hidden="true" />
    </button>
  );
}
