import { useState, useEffect } from "react";

const MouseLightEffect = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="absolute w-40 h-40 bg-blue-500 rounded-full opacity-50 blur-2xl pointer-events-none"
            style={{
                left: position.x - 80,
                top: position.y - 80,
            }}
        ></div>
    );
};

export default MouseLightEffect;
 