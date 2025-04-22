import React from "react";
import "/src/App.css";

export const Header = () => {    return (
        <header class="header" id="header">
            <div class="logo">COMPANY</div>
            <div class="logo">Tourism Ipsum Site</div>
            <nav class="nav">
                <a href="/company">Company</a>
                <a href="/services">Our Cases</a>
                <a href="/advantages">Blog</a>
                <a class="active" href="/news">News</a>
                <a href="/contact">Contact</a>
                <a href="/Register"> Registrarme </a>
                <a href="/Login"> Iniciar sesión </a>
            </nav>
        </header>
    );
}
export default Header;
