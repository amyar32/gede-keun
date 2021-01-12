import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function PageContent(props) {
    const { darkState } = useContext(DarkModeContext);
    const styles = {
        backgroundColor: darkState ? "#212121" : "white",
        height: "100vh",
    };
    return <div style={styles}>{props.children}</div>;
}
