import React from 'react';
import "../styles/Footer.css"
import a from "../imgs/SHIFTbrandbook 1.png"
import q from "../imgs/icon-instagram 1.svg"
import w from  "../imgs/icon-facebook 1.svg"
import e from "../imgs/icon-linkedin 1.svg"
function Footer(props) {
    return (
        <div className={"footer-box"}>
            <div className={"card-footer"}>
                <img className={"img-fot"} src={a} alt=""/>
                <p className={"shift"}>© “SHIFT ACADEMY”, 2024 - Barcha huquqlar himoyalangan.</p>
            </div>
            <div >
                <div className={"imgs"}>
                    <img src={q} alt=""/>
                    <img src={w} alt=""/>
                    <img src={e} alt=""/>

                </div>
                <div className={"number"}>
                    <p className={"number-footer"}>+998 94 124 00 41</p>

                </div>
            </div>
        </div>
    );
}

export default Footer;