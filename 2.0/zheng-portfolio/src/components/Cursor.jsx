import { useState, useEffect } from 'react';

import './Cursor.css';

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateCursor);
        return () => window.removeEventListener('mousemove', updateCursor);
    }, []);

    return (
        <div 
            id="cursor" 
            style={
                {transform: `translate(${position.x - 5}px, ${position.y - 5}px)`}
            }
        >
        </div>
    );
}