import '@/styles/globals.css'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import Layout from '../layout/Layout'
import { store } from '../store'

export default function App({ Component, pageProps }) {
  return (

    <Provider store={store}>
      <IntlProvider locale='tr'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </Provider >
  )
}
