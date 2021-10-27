import React, { useState } from 'react';

import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../imgs/logo.png'

const NavbarDropdown = ({ children, label }) => {
    const [isVisible, setIsVisible] = useState(false)

    function handleShowContent() {
        setIsVisible(true)
    }
    function handleHideContent() {
        setIsVisible(false)
    }
    function handleToggleVisible() {
        setIsVisible(!isVisible)
    }

    return (
        <div className="navbar-dropdown-container"
            onMouseOver={() => handleShowContent()}
            onMouseLeave={() => handleHideContent()}>

            <span className="navbar-dropdown-label " >
                <i className="fas fa-bars dropdown-icon" />
                <span>
                    {label ? label : 'menu-item'}
                </span>
                <i className={isVisible ? "fas fa-chevron-right dropdown-icon dropdown-icon-rotated" :
                    "fas fa-chevron-right dropdown-icon"} />

            </span>
            <div style={{ width: '100%', height: '120%', position: 'relative', top: '-25px', cursor: 'pointer' }}
                onClick={() => handleToggleVisible()}
                onMouseOver={() => handleShowContent()}
                onMouseLeave={() => handleHideContent()} />

            <div className={isVisible ? "menuitem-dropdown-content-container" : "menuitem-dropdown-content-hide"}>
                {children}
            </div>
        </div>
    )
}
const NavbarDropdownItem = ({ label }) => {
    return (
        <div className="dropdownitem-container">
            <Link href="/">
                <span className={"navbar-menuitem-label"
                }>{label ? label : 'menu-item'}</span>
            </Link>
        </div>
    )
}
const NavbarMenuItem = ({ label, href }) => {
    return (
        <div className="menuitem-container">
            <Link href={href ? href : "#"}>
                <span className={"navbar-menuitem-label"}>{label ? label : 'menu-item'}</span>
            </Link>
        </div>
    )
}
const SearchBar = ({ className }) => {
    return (
        <div className={
            className ? "input-group showSearchbar searchbar-style " :
                "input-group search-bar-container searchbar-style "}>
            <label className="custom-file-label searchbar-icon-label">
                <i className="fas fa-search searchbar-icon"></i>
            </label>
            <input type="text" className="form-control searchbar-style" placeholder="Busque por um produto..." aria-label="PesquisarProduto" aria-describedby="search-bar-input" />
        </div>
    )
}
const LoginButton = () => {
    return (
        <Link href="/login">
            <div className="navbar-loginbutton-container">
                <span className="navbar-login-button">Entrar/Cadastrar</span>
            </div>
        </Link>
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
                        <Link href="/">
                            <span className="logo-link">
                                <Image src={Logo} alt="logo-brand" className="logo-img"
                                    height={90} width={135} />
                            </span>
                        </Link>
                        <SearchBar />

                        <Link href="/carrinho">
                            <button type="button" className="btn btn-outline-primary">
                                <i className="fas fa-shopping-cart" /> Carrinho
                                (0)
                            </button>
                        </Link>

                    </div>
                    <div style={{ display: 'flex' }}>
                        <SearchBar className="showSearchBar" />
                    </div>
                </div>
                <div className="container">
                    <div className="navbar-menu-container">
                        <NavbarDropdown label="Categorias">
                            <NavbarDropdownItem label="Cartão de visita" />
                            <NavbarDropdownItem label="Cartão de visita" />
                            <NavbarDropdownItem label="Cartão de visitaCartão de visita" />
                            <NavbarDropdownItem label="Cartão de visita" />
                            <NavbarDropdownItem label="Cartão de visita" />
                            <NavbarDropdownItem label="Cartão de visita" />
                            <NavbarDropdownItem label="Cartão de visitaCartão de visita" />
                            <NavbarDropdownItem label="Cartão de visita" />
                            <NavbarDropdownItem label="Cartão de visita" />
                            <NavbarDropdownItem label="Cartão de visita" />
                            <NavbarDropdownItem label="Cartão de visita" />
                            <NavbarDropdownItem label="Cartão de visita" />
                            <NavbarDropdownItem label="Cartão de visita" />
                            <NavbarDropdownItem label="Cartão de visita" />
                            <NavbarDropdownItem label="Cartão de visita" />
                            <NavbarDropdownItem label="Cartão de visita" />
                        </NavbarDropdown>
                        <NavbarMenuItem label="Cartão de visita" href={"/produtos/cartao-de-visita"} />
                        <NavbarMenuItem label="Flyers e Folhetos" href={"/produtos/flyers-e-folhetos"} />
                        <NavbarMenuItem label="Autocolantes" href={"/produtos/autocolantes"} />
                        <NavbarMenuItem label="Logotípo á Medida" href={"/produtos/logotipo"} />
                        <LoginButton />
                    </div>
                </div>
            </div>
            <div className="navbar-line-divider" ></div>
        </nav>
    );
}

export default Navbar;