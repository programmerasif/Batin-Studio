import { useState } from "react"

export default function CustomCursor({ imagePath, visible }) {

    const [mousex, setMousex] = useState();
    const [mousey, setMouseY] = useState();
    const rect = document.body.getBoundingClientRect();
    window.addEventListener('mousemove', setMousePosition);
    function setMousePosition(e) {
        setMousex(e.clientX - rect.left);
        setMouseY(e.clientY - rect.top);
    }
    return (
        <div
            style={{
                position: "absolute",
                width: "200px",
                height: "200px",
                backgroundImage: `url('${imagePath}')`,
                mixBlendMode: "multiply",
                backgroundSize: "cover",
                pointerEvents: "none",
                zIndex: 9999,
                display:`${visible}`,
                transform: "translate(-50%, -50%)",
                left:`${mousex}px`,
                top:`${mousey}px`,
            }}
            onMouseMove={setMousePosition} class="custom-cursor"></div>
    )
    
}