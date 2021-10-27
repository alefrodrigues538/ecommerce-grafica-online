import React from 'react';

function Cadastro() {
    return (
        <div className="container cadastro-container">

            <h2 style={{ width: '100%' }}>Cadastrar nova conta</h2>
            <div className="form-group form-info-pessoal">
                <h4 className="cadastro-title">1. Informações pessoais</h4>
                <label>Nome completo</label>
                <input className="form-control" placeholder="Digite o seu nome completo" />
                <label>Telefone</label>
                <input className="form-control" placeholder="(00)00000-0000" />
                <label>Endereço</label>
                <input className="form-control" placeholder="Endereço" />
                <label>Numero</label>
                <input className="form-control" placeholder="Numero" />
                <label>Bairro</label>
                <input className="form-control" placeholder="Bairro" />
                <label>Estado</label><br />
                <select>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                    <option value="DF">Distrito Federal</option>
                </select>
            </div>
            <div className="form-group form-acesso">
                <h4 className="cadastro-title">2. Informações de acesso</h4>
                <label>Email</label>
                <input className="form-control" placeholder="Digite seu E-mail" />
                <label>Senha</label>
                <input className="form-control" placeholder="Digite uma Senha" />
                <label>Confirme a Senha</label>
                <input className="form-control" placeholder="Confirmação de Senha" />

                <br />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-center' }}>
                    <button className="btn btn-primary">Cadastrar-se</button>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;