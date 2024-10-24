import React, { useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import "../styles/Body9.css";

function Body9() {
    const defaultState = {
        center: [39.763277218011424, 64.4259502778979], // Berilgan joyning koordinatalari
        zoom: 21,
    };

    useEffect(() => {
        const handleResize = () => {
            // Force map to resize
            if (window.YMaps) {
                window.YMaps.mapInstance.setSize();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <p className={"biz2"}>BIZNING MANZIL</p>
            <div className={"box-cards6"}>
                <div className={"big-box2"}>
                    <YMaps>
                        <Map defaultState={defaultState} className="yandex-map">
                            <Placemark geometry={[39.763277218011424, 64.4259502778979]} />
                        </Map>
                    </YMaps>
                </div>
                <div className={"card-body9"}>
                    <p className={"buxoro"}>BUXORO</p>
                    <div className={"div-card"}>
                        <p className={"image3"}>IMAGE</p>
                    </div>
                    <p className={"mol"}>MO’LJAL</p>
                    <p className={"text-card"}>BUXORO KITOB OLAMI YONIDA</p>
                    <div className={"chiziq2"}></div>
                    <p className={"ish"}>ISH VAQTI</p>
                    <p className={"time"}>09:00-18:00</p>
                </div>
            </div>
            <div className={"aylana11"}></div>
        </div>
    );
}

export default Body9;
