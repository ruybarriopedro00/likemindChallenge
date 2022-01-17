import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.scss";
import { Navigation } from "./routes/Navigation";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    );
}

export default App;
