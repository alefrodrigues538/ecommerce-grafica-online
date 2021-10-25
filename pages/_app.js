import '../styles/globals.css'
import '../styles/variables.css'

//LAYOUT
import '../styles/pages/navbar.css'
import '../styles/pages/footer.css'

//PAGES
import '../styles/pages/home.css'

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
