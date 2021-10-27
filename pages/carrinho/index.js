import React from 'react';

import Breadcrumb from '../../components/Breadcrumb'

const Carrinho = () => {

}

function carrinho() {
    return (
        <div className="container">
            <Breadcrumb RoutesArray={[
                { pathname: 'inicio', route: '/' },
                { pathname: 'carrinho' },
            ]} />


        </div>
    );
}

export default carrinho;