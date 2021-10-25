import React from 'react';

const CategoriaProduto = ({ title, children }) => {
    return (
        <div className="categprod-container">
            <p className="categprod-title">{title ? title : 'Categoria de produtos'}</p >
            <div className="categprod-items">{children}</div>
        </div>
    );
}

export default CategoriaProduto;