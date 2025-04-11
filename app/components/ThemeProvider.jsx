'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Create a context for theme
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Check if we're in the browser environment
  const isBrowser = typeof window !== 'undefined';
  
  // Initialize state with user's preference or system preference
  const [darkMode, setDarkMode] = useState(false);

  // Initialize on client side only
  useEffect(() => {
    if (!isBrowser) return;
    
    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      // Check for system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, [isBrowser]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Update the DOM when dark mode changes
  useEffect(() => {
    if (!isBrowser) return;
    
    // Update localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    
    // Update document class
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode, isBrowser]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
