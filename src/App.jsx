import React from 'react';
import {Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing.jsx";

function App(props) {
    return (
        <div >
            <Routes>
                <Route path={"/"} element={<Landing/>}/>
            </Routes>
        </div>
    );
}

export default App;
