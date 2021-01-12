import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import PageContent from "./components/PageContent";

export default function App() {
    return (
        <ThemeProvider>
            <PageContent />
        </ThemeProvider>
    );
}
