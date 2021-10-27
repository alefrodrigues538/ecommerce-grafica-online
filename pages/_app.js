import '../styles/globals.css'
import '../styles/variables.css'

//LAYOUT
import '../styles/pages/navbar.css'
import '../styles/pages/footer.css'

//PAGES
import '../styles/pages/home.css'
import '../styles/pages/prod.css'
import '../styles/pages/produtos.css'
import '../styles/pages/login.css'
import '../styles/pages/cadastro.css'
import '../styles/pages/carrinho.css'

//COMPONENTS
import '../styles/components/cardprod.css'
import '../styles/components/categoriaprod.css'

//BIBLIOTECAS
import 'bootstrap/dist/css/bootstrap.css'

import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
