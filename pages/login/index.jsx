import React from 'react';
import Link from 'next/link'

function Login() {
    return (
        <div className="container">
            <div className="page-container">
                <div className="login-container">
                    <h3>JÁ SOU CLIENTE!</h3>
                    <p>Digite abaixo seu email e senha já cadastrados em nosso site.</p>
                    <input className="form-control" placeholder="Digite seu email" /><br />
                    <input className="form-control" placeholder="Digite sua senha" />
                    <p id="btn-esqueceu-senha">Esqueceu sua senha ?</p>
                    <button className="btn btn-primary btn-acessar">Acessar</button>
                </div>
                <div className="login-divider" />
                <div className="cadastro-container">
                    <h3>AINDA NÃO SOU CLIENTE!</h3>
                    <h5>Cadastrar-se</h5>
                    <p id="info-cadastro">Crie sua conta em poucos passos, com ela voce poderá realizar compras, acompanhar pedidos, solicitar orçamentos e muito mais!</p>
                    <Link href="/cadastro">
                        <button className="btn btn-primary">
                            Quero me cadastrar!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;