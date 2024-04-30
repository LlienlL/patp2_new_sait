"use client"

import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function Theme({ children, defaultTheme }) {
    const [theme, setTheme] = useState(defaultTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <body className={theme}>
                {children}
            </body>
        </ThemeContext.Provider> 
    )
}