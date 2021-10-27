
import BannerCarousel from '../components/BannerCarousel'
import CardProduto from '../components/CardProduto'
import CategoriaProduto from '../components/CategoriaProduto'

import imgprod from '../imgs/box-product.png'
export default function Home() {
  return (
    <div className="container">
      <BannerCarousel />
      <CategoriaProduto title="Nossos Produtos">
        <CardProduto
          src={imgprod}
          href="/produtos/item0"
          price={'69,90'}
          unidade={"/1 un."} />
        <CardProduto
          src={imgprod}
          href="/produtos/item0"
          price={'690,90'}
          unidade={"/1000 un."} />
        <CardProduto
          src={imgprod}
          href="/produtos/item0"
          price={'119,90'} />
        <CardProduto
          src={imgprod}
          href="/produtos/item0"
          price={'69,90'}
          unidade={"/1 un."} />
        <CardProduto
          src={imgprod}
          href="/produtos/item0"
          price={'690,90'}
          unidade={"/1000 un."} />
        <CardProduto
          src={imgprod}
          href="/produtos/item0"
          price={'119,90'} />
        <CardProduto
          src={imgprod}
          href="/produtos/item0"
          price={'69,90'}
          unidade={"/1 un."} />
        <CardProduto
          src={imgprod}
          href="/produtos/item0"
          price={'690,90'}
          unidade={"/1000 un."} />
        <CardProduto
          src={imgprod}
          href="/produtos/item0"
          price={'690,90'}
          unidade={"/1000 un."} />
        <CardProduto
          src={imgprod}
          href="/produtos/item0"
          price={'690,90'}
          unidade={"/1000 un."} />
      </CategoriaProduto>
    </div>
  )
}
