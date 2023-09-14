import { useEffect, useState } from 'react';

export default function useDarkSide(): [string, (theme: string) => void] {
    const [theme, setTheme] = useState<string>(() => {
        if (typeof window !== 'undefined') {
            return localStorage.theme || 'dark';
        } else {
            return 'dark';
        }
    });

    const colorTheme: string = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const root = window.document.documentElement;
            root.classList.remove(colorTheme);
            root.classList.add(theme);
            localStorage.setItem('theme', theme);
        }
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}
