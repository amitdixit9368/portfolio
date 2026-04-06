export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  github: string;
  demo: string;
  featured: boolean;
}

export interface ThemeContextValue {
  isDark: boolean;
  toggleTheme: () => void;
}
