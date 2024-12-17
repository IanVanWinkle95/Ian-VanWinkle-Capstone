import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Services">Services</Link></li>
            </ul>
        </nav>
    )
}