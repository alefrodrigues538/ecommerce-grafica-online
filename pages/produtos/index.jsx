import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

function Produtos() {
    return (
        <div className="container">
            <Breadcrumb RoutesArray={[
                { pathname: 'inicio', route: '/' },
                { pathname: 'produtos', route: '/produtos' },
            ]} />
            todos os produtos
        </div>
    );
}

export default Produtos;