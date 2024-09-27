"use client"
import { useState } from "react";

export default function ClientSideComponent({ stock }) {
    const [quantity, setQuantity] = useState(0)
    return (
        <div className="stockSection">
            <button onClick={() => setQuantity(prev => prev-1)}> - </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(prev => prev === stock ? prev : prev +1)}> + </button>
        </div>
    )
}