import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function PageContent(props) {
    const { isDarkMode } = useContext(ThemeContext);
    const styles = {
        backgroundColor: isDarkMode ? "#322f3d" : "#cfdac8",
        height: "100vh",
    };
    return <div style={styles}>{props.children}</div>;
}
