import React from 'react';
import "../styles/Header.css"
import a from "../imgs/logo1 1.png"
function Header(props) {
    return (
        <div className={"card-header"}>
            <div className={"header-card"}>
                <img className={"img-media"} src={a} alt=""/>
                <button className={"btn-header"}>+998 94 124 00 41</button>
            </div>
            <div style={{display:"block"}}>
                <p className={"text-header"}>10 OYDA YANGI KASB <br/> O'RGANING!</p>
                <p className={"text-header2"}>BUXORODAGI ENG SIFATLI DASTURLASH VA <br/> KOMPYUTER KURSLARI!</p>
                <div class="container-btn">
                <button className={"btn-card"}>BEPUL KONSULTATSIYA!</button>
                </div>
            </div>
            <div className={"aylana"}></div>
            <div className={"aylana2"}></div>

        </div>
    );
}

export default Header;