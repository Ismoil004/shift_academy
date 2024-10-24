import React from 'react';
import "../styles/Landing.css"
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Body2 from "./Body2.jsx";
import Body3 from "./Body3.jsx";
import Body4 from "./Body4.jsx";
import Body5 from "./Body5.jsx";
import Body6 from "./Body6.jsx";
import Body7 from "./Body7.jsx";
import Body8 from "./Body8.jsx";
import Body9 from "./Body9.jsx";
import Footer from "./Footer.jsx";
function Landing(props) {
    return (
        <div className={"homeMain"}>
         <div className={"wrapper4"}>
         <Header/>
             <Body/>
             <Body2/>
             <Body3/>
             <Body4/>
             <Body5/>
             <Body6/>
             <Body7/>
             <Body8/>
             <Body9/>
             <Footer/>
         </div>
        </div>
    );
}

export default Landing;