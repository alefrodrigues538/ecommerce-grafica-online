import React, { useState } from 'react';

import Image from 'next/image'

import Logo from '../imgs/logo.png'

const NavbarDropdown = ({ children, label }) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className="navbar-dropdown-container"
            onClick={() => setIsVisible(!isVisible)}
            onMouseOver={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            <span className="navbar-dropdown-label " >
                <i className="fas fa-bars dropdown-icon" />
                <span>
                    {label ? label : 'menu-item'}
                </span>
                <i className={isVisible ? "fas fa-chevron-right dropdown-icon dropdown-icon-rotated" :
                    "fas fa-chevron-right dropdown-icon"} />

            </span>
            <div className={isVisible ? "menuitem-dropdown-content-container" : "menuitem-dropdown-content-hide"}>
                {children}
            </div>
        </div>
    )
}
const NavbarMenuItem = ({ label }) => {
    return (
        <div className="menuitem-container">
            <a href="#" className="navbar-menuitem-label">{label ? label : 'menu-item'}</a>
        </div>
    )
}
const SearchBar = () => {
    return (
        <div className="input-group search-bar-container searchbar-style">
            <label className="custom-file-label searchbar-icon-label">
                <i className="fas fa-search searchbar-icon"></i>
            </label>
            <input type="text" className="form-control searchbar-style" placeholder="Pesquisar Produto" aria-label="Pesquisar Produto" aria-describedby="search-bar-input" />
        </div>
    )
}
const LoginButton = () => {
    return (
        <div className="navbar-loginbutton-container">
            <a href="/login" style={{ textDecoration: 'none' }}>
                <span className="navbar-login-button">Entrar/Cadastrar</span>
            </a>
        </div>
    )
}

function Navbar() {
    return (
        <nav>
            <div className="navbar-container">
                <div className="navbar-top-container">
                    <div className="container">
                        <div className="navbar-top-social-media">
                            <h5 style={{ margin: '0!important', color: '#5A5A5A' }}>Mídias Sociais </h5>
                            <i className="fab fa-facebook-square navbar-top-social-media-icon" />
                            <i className="fab fa-instagram navbar-top-social-media-icon" />
                            <i className="fab fa-whatsapp navbar-top-social-media-icon"></i>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="navbar-mid-container">
                        <a href="/" className="logo-link">
                            <Image src={Logo} alt="logo-brand" className="logo-img"
                                height={90} width={135} />
                        </a>
                        <SearchBar />

                        <button type="button" className="btn btn-primary">
                            <i className="fas fa-shopping-cart" /> Carrinho </button>
                    </div>
                </div>
                <div className="container">
                    <div className="navbar-menu-container">
                        <NavbarDropdown label="Mais Produtos">
                            <NavbarMenuItem label="Cartão de visita" />
                            <NavbarMenuItem label="Cartão de visita" />
                            <NavbarMenuItem label="Cartão de visitaCartão de visitaCartão de visita" />
                            <NavbarMenuItem label="Cartão de visita" />
                            <NavbarMenuItem label="Cartão de visita" />
                            <NavbarMenuItem label="Cartão de visita" />
                            <NavbarMenuItem label="Cartão de visitaCartão de visita" />
                            <NavbarMenuItem label="Cartão de visita" />
                            <NavbarMenuItem label="Cartão de visita" />
                            <NavbarMenuItem label="Cartão de visita" />
                            <NavbarMenuItem label="Cartão de visita" />
                            <NavbarMenuItem label="Cartão de visita" />
                            <NavbarMenuItem label="Cartão de visita" />
                            <NavbarMenuItem label="Cartão de visita" />
                            <NavbarMenuItem label="Cartão de visita" />
                            <NavbarMenuItem label="Cartão de visita" />
                        </NavbarDropdown>
                        <NavbarMenuItem label="Cartão de visita" />
                        <NavbarMenuItem label="Flyers e Folhetos" />
                        <NavbarMenuItem label="Autocolantes" />
                        <NavbarMenuItem label="Logotípo á Medida" />
                        <LoginButton />
                    </div>
                </div>
            </div>
            <div className="navbar-line-divider" ></div>
        </nav>
    );
}

export default Navbar;