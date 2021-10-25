import React from 'react';
import Image from 'next/image'

import pix from '../../imgs/pix.png'
import visa from '../../imgs/visa.png'
import mastercard from '../../imgs/mastercard.png'
import boleto from '../../imgs/boleto.png'

import selossl from '../../imgs/selossl.png'
function components() {
    return (
        <footer>
            <div className="container ">
                <div className="row justify-content-md-center">
                    <div className="col-md-12 footer-midias-container">
                        <p className="footer-midias-title">Siga-nos em nossas mídias digitais</p>
                        <i className="fab fa-facebook-square footer-icons"></i>
                        <i className="fab fa-whatsapp footer-icons"></i>
                        <i className="fab fa-instagram footer-icons"></i>
                    </div>

                    <div style={{ width: '100%', border: '1px solid #ccc', margin: '16px 0' }}></div>

                    <div className="col-md-3 col-sm-6 footer-tablet-align">
                        <Image src={selossl} alt="selo-ssl" width={215} height={100} />
                    </div>

                    <div className="col-md-5 col-sm-6 footer-margin-top footer-tablet-align">
                        <h6 className="footer-text-tablet-align">Horario atendimento</h6>
                        <p>Segunda a Sexta, 09h às 18h /
                            Sabados das 09:00 às 15:00</p>
                    </div>

                    <div className="col-md-4 col-sm-12 footer-margin-top footer-tablet-align">
                        <h6 className="footer-text-tablet-align">Formas de pagamento</h6>
                        <div className="footer-formas-pagamento">
                            <Image src={pix} alt="pix" width={85} height={30} />
                            <Image src={visa} alt="visa" width={92} height={30} />
                            <Image src={mastercard} alt="mastercard" width={51} height={40} />
                            <Image src={boleto} alt="boleto" width={79} height={50} />
                        </div>
                    </div>

                    <div className="col-12" id="direitos">
                        <h6>Virtua Sun - 2021 - Todos os direitos reservados.</h6>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default components;