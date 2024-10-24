import React, { useRef } from 'react';
import "../styles/Body4.css";

function Body4() {
    const carouselRef = useRef(null);
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
        isDown = true;
        carouselRef.current.classList.add('active');
        startX = e.pageX - carouselRef.current.offsetLeft;
        scrollLeft = carouselRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDown = false;
        carouselRef.current.classList.remove('active');
    };

    const handleMouseUp = () => {
        isDown = false;
        carouselRef.current.classList.remove('active');
    };

    const handleMouseMove = (e) => {
        if (!isDown) return; // stop the function from running
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1; // scroll-fast
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div>
            <p className={"body4-text"}>O’QUVCHILARNING FIKRLARI</p>
            <div
                className="carousel-container-body4"
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="carousel-body4">
                    <div className="card-body4">
                        <p className="video-text">VIDEO 1</p>
                        <button className="btn-body4">NAME 1</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 2</p>
                        <button className="btn-body4">NAME 2</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 3</p>
                        <button className="btn-body4">NAME 3</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 4</p>
                        <button className="btn-body4">NAME 4</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 1</p>
                        <button className="btn-body4">NAME 1</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 2</p>
                        <button className="btn-body4">NAME 2</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 3</p>
                        <button className="btn-body4">NAME 3</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 4</p>
                        <button className="btn-body4">NAME 4</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 1</p>
                        <button className="btn-body4">NAME 1</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 2</p>
                        <button className="btn-body4">NAME 2</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 3</p>
                        <button className="btn-body4">NAME 3</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 4</p>
                        <button className="btn-body4">NAME 4</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 1</p>
                        <button className="btn-body4">NAME 1</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 2</p>
                        <button className="btn-body4">NAME 2</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 3</p>
                        <button className="btn-body4">NAME 3</button>
                    </div>
                    <div className="card-body4">
                        <p className="video-text">VIDEO 4</p>
                        <button className="btn-body4">NAME 4</button>
                    </div>
                    {/* Qo'shimcha kartalar */}
                </div>
            </div>
        </div>


    );
}

export default Body4;
