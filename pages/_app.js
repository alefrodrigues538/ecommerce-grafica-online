import '../styles/globals.css'
import '../styles/variables.css'


import '../styles/navbar.css'
import '../styles/footer.css'


import 'bootstrap/dist/css/bootstrap.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
