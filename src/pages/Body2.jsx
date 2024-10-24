import React, { useState, useEffect } from 'react';
import "../styles/Body2.css";

function Body2() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [slideAmount, setSlideAmount] = useState(100); // Default slide amount (percentage)

    // Detect screen width on component mount and update slideAmount

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setIsTransitioning(true); // Enable transition effect
            setActiveIndex((prevIndex) => {
                if (prevIndex === 3) { // If last card, reset after a delay
                    setTimeout(() => {
                        setIsTransitioning(false); // Disable transition to avoid snap effect
                        setActiveIndex(0); // Reset to the first card
                    }, 500); // Delay must match the transition duration (0.5s)
                    return prevIndex;
                }
                return prevIndex + 1;
            });
        }, 3000); // Adjust the interval timing as needed

        return () => {
            clearInterval(slideInterval); // Cleanup the interval on unmount
        };
    }, []);

    return (
        <div className="carousel-container">
            <div
                className="body2"
                style={{
                    transform: `translateX(-${activeIndex * slideAmount}%)`,
                    transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                }}
            >
                <div className="card-body2">
                    <p className="img-card">IMAGE 1</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 2</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 3</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 4</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 1</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 2</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 3</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 4</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 1</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 2</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 3</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 4</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 1</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 2</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 3</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 4</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 1</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 2</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 3</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 4</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 1</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 2</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 3</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 4</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 1</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 2</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 3</p>
                </div>
                <div className="card-body2">
                    <p className="img-card">IMAGE 4</p>
                </div>
            </div>
        </div>
    );
}

export default Body2;
