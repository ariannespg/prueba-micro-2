import React, { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Pixel Alliance</a>
        <ul>
            <li>
                <a href="/BuscadorPage">Buscador</a>
            </li>
            <li>
                <a href="/Perfil">Perfil</a>
            </li>
            <li>
                <a href="/ClubPage">Clubes</a>
            </li>
        </ul>
    </nav>
}