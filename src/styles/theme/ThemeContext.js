import React, { useContext } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { DarkModeContext } from "../../context/DarkModeContext";
import {
    orange,
    lightBlue,
    deepOrange,
    deepPurple,
} from "@material-ui/core/colors";

export default function ThemeContext(props) {
    const { darkState } = useContext(DarkModeContext);

    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
    const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

    const theme = createMuiTheme({
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor,
            },
            secondary: {
                main: mainSecondaryColor,
            },
        },
    });

    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
