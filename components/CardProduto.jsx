import React from 'react';
import Link from 'next/link';

import Image from 'next/image'
const CardProduto = ({ title, src, href, price, unidade }) => {
    return (
        <Link href={href ? href : "#"}>
            <div className="cardprod-container">
                <Image
                    src={src}
                    alt={title}
                    height={220}
                    width={220} />
                <h3 className="cardprod-title-text">{title ? title : 'item0'}</h3>

                <p className="cardprod-price-container">
                    <span className="cardprod-promo-text">a partir de</span> <br />
                    <span className="cardprod-price-text">{`R$ ${price}`}</span>
                    <span className="cardprod-unid-text">{`${unidade ? unidade : ''}`}</span>
                </p>
            </div>
        </Link>
    );
}

export default CardProduto;