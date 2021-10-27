import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CardProduto from '../../components/CardProduto';
import Link from 'next/link'

import imgprod from '../../imgs/box-product.png'

const DepartLink = ({ title, href }) => {
    return (
        <Link href={href ? href : "#"}>
            <span className="depart-link-text">{title ? title : "Departamento0"}</span>
        </Link>
    )
}
function Produtos() {
    return (
        <div className="container">
            <Breadcrumb RoutesArray={[
                { pathname: 'inicio', route: '/' },
                { pathname: 'produtos', route: '/produtos' },
            ]} />
            <h2>Todos os produtos</h2>
            <div className="produtos-container">
                <div className="produtos-searchbar-container">
                    <div className="produtos-searchbar">
                        <input className="produtos-searchbar-input" placeholder="Buscar produto" />
                        <i className="fas fa-search produtos-searchbar-icon"></i>
                    </div>
                </div>
                {/* <div className="produtos-depart-container">
                    <h4>Departamentos</h4>
                    <DepartLink href="/" title="Departamento0" />
                    <DepartLink href="/" title="Departamento1" />
                    <DepartLink href="/" title="Departamento2" />
                    <div className="divider"></div>
                    <DepartLink href="/" title="Departamento3" />
                    <DepartLink href="/" title="Departamento4" />
                </div> */}
                <div className="produtos-cards-container">
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                    <CardProduto
                        src={imgprod}
                        title="Item0"
                        href="/produtos/item0"
                        price="47,55"
                        unidade="/ 1000un"
                    />
                </div>
            </div>
        </div>
    );
}

export default Produtos;