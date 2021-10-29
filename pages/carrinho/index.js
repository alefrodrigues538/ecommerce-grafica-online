import React from 'react';
import Image from 'next/image'
import Breadcrumb from '../../components/Breadcrumb'

import ProdIMG from '../../imgs/box-product.png'

const CarrinhoHeader = () => {
    return (
        <div className="carrinho-container">
            <div className="carrinho-produto-container">
                <h5 style={{ width: '100%' }}>produto</h5>
                <div className="divider" />
            </div>
            <div className="carrinho-header-container">
                <h5 className="carrinho-header-align">preço</h5>
                <div className="divider" />
            </div>
            <div className="carrinho-header-container">
                <h5 className="carrinho-header-align">quantidade</h5>
                <div className="divider" />
            </div>
            <div className="carrinho-header-container">
                <h5 className="carrinho-header-align">total</h5>
                <div className="divider" />
            </div>
        </div>
    )
}
const CarrinhoItem = () => {
    return (
        <>
            <div className="carrinho-container">
                <div className="carrinho-produto-container">
                    <Image src={ProdIMG} alt="prod-img" height={172} width={172} />
                    <div>
                        <h6>Produto Nome</h6>
                        <p>
                            Insira uma descrição do produto aqui.<br />
                            Insira uma descrição do produto aqui.<br />
                            Insira uma descrição do produto aqui.<br />
                            Insira uma descrição do produto aqui.<br />
                            Insira uma descrição do produto aqui.<br />
                            Insira uma descrição do produto aqui.<br />
                        </p>
                    </div>
                </div>
                <div className="carrinho-infos-container carrinho-header-align">
                    <p className="carrinho-price-value">R$69,90</p>
                </div>
                <div className="carrinho-infos-container carrinho-header-align">
                    <i className="far fa-minus-square carrinho-icon-quantidade" />
                    <p className="carrinho-quantidade-value">1</p>
                    <i className="far fa-plus-square carrinho-icon-quantidade" />
                </div>
                <div className="carrinho-infos-container carrinho-header-align">
                    <p className="carrinho-total-value">R$69,90</p>
                </div>

            </div>
            <div className="divider" />
        </>
    )
}

function carrinho() {
    return (
        <div className="container">
            <Breadcrumb RoutesArray={[
                { pathname: 'inicio', route: '/' },
                { pathname: 'carrinho' },
            ]} />

            <CarrinhoHeader />
            <CarrinhoItem />
            <CarrinhoItem />
            <CarrinhoItem />

        </div>
    );
}

export default carrinho;