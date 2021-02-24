import NProgress from 'nprogress'
import Router from 'next/router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css'

import '../styles/slabo-main.scss'
import '../styles/globals.css'
import '../styles/main.scss'

NProgress.configure({ showSpinner: false })
Router.onRouteChangeStart = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
