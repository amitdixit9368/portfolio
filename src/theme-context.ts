import { createContext } from 'react';
import type { ThemeContextValue } from './types';

const defaultThemeContext: ThemeContextValue = {
  isDark: false,
  toggleTheme: () => undefined,
};

export const ThemeContext = createContext<ThemeContextValue>(defaultThemeContext);
