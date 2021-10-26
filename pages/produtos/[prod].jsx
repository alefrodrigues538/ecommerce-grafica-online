import { useRouter } from 'next/router'
import Breadcrumb from '../../components/Breadcrumb';

import Image from 'next/image'

import flyer from '../../imgs/flyer.jpg'

function Produtos(props) {
    const router = useRouter()
    const { prod } = router.query
    const prodName = String(prod).replace('-', ' ')
        .replace('-', ' ')
        .replace('-', ' ')
        .replace('-', ' ')

    console.log(prod)
    return (
        <div className="container">
            <Breadcrumb RoutesArray={[
                { pathname: 'inicio', route: '/' },
                { pathname: 'produtos', route: '/produtos' },
                { pathname: prodName, route: '/produtos/' + prod }
            ]} />
            <div className="prod-container">
                <div className="prod-image-container">
                    <Image src={flyer} alt={prod} width={512} height={512} />
                </div>
                <div className="prod-descricao-container">
                    <h2 className="prod-title">Folder 1 dobra</h2>
                    <h5 className="prod-subtitle">Folder 1 dobra personalizado</h5>
                    <p className="prod-descricao">Opte por fazer seu Folder 1 dobra Personalizado para causar impacto no seu cliente. Personalize Folder 1 dobra Online à sua medida, e imprima de forma simples e rápida.</p>

                    <div className="prod-component-container">
                        <div className="component-align">
                            <p className="component-title">Tamanho Aberto</p>
                            <select style={{ width: '60%' }}>
                                <option value={0}>297x420mm (A3)</option>
                                <option value={1}>210x297mm (A4)</option>
                                <option value={2}>148x210mm (A5)</option>
                                <option value={3}>105x148mm (A6)</option>
                                <option value={4}>210x198mm</option>
                                <option value={5}>297x105mm</option>
                                <option value={6}>420x99mm</option>
                                <option value={7}>420x148mm</option>
                                <option value={8}>594x210mm</option>
                            </select>
                        </div>
                        <div className="component-align">
                            <p className="component-title">Material</p>
                            <select style={{ width: '60%' }}>
                                <option value={0}>Couchê Fosco 90g</option>
                                <option value={1}>Couché 150g Brilho</option>
                                <option value={2}>Papel 300g</option>
                            </select>
                        </div>
                        <div className="component-align">
                            <p className="component-title">Impressão</p>
                            <select style={{ width: '60%' }}>
                                <option value={0}>Cores, Frente e Verso</option>
                                <option value={1}>Preto e Branco, Frente e Verso</option>
                            </select>
                        </div>
                        <div className="component-align">
                            <p className="component-title">Opções</p>
                            <select style={{ width: '60%' }}>
                                <option value={0}>Sem acabamento</option>
                                <option value={1}>Laminação Fosca, Frente e Verso</option>
                            </select>
                        </div>
                        <div className="component-align">
                            <p className="component-title">Outros</p>
                            <select style={{ width: '60%' }}>
                                <option value={0}>Dobra</option>
                                <option value={1}>Dobra e Vinco</option>
                            </select>
                        </div>
                        <div className="component-align">
                            <p className="component-title">Quantidade</p>
                            <select style={{ width: '60%' }}>
                                <option value={0}>100</option>
                                <option value={1}>250</option>
                                <option value={2}>500</option>
                                <option value={3}>1000</option>
                                <option value={4}>2000</option>
                                <option value={5}>4000</option>
                                <option value={6}>8000</option>
                                <option value={7}>16000</option>
                                <option value={8}>32000</option>
                                <option value={9}>64000</option>
                                <option value={10}>128000</option>
                                <option value={11}>256000</option>
                            </select>
                        </div>
                        <div className="component-align component-price-container">
                            <p className="component-price-title">Valor do Orçamento:</p>
                            <div className="component-price-text-container">
                                <span className="component-old-price-text">R$1149,90</span> <br />
                                <span className="component-price-text">R$690,90</span>
                            </div>
                        </div>
                        <div className="btn-adicionar-carrinho">
                            <p className="btn-add-carrinho">Adicionar ao carrinho</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Produtos;