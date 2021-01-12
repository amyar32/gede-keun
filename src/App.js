import React from "react";
import { DarkModeProvider } from "./context/DarkModeContext";
import ThemeContext from "./styles/theme/ThemeContext";
import PageContent from "./components/PageContent";
import Form from "./components/Form";

export default function App() {
    return (
        <DarkModeProvider>
            <ThemeContext>
                <PageContent>
                    <Form />
                </PageContent>
            </ThemeContext>
        </DarkModeProvider>
    );
}
