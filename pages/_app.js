import ReactGA from 'react-ga'
import App from 'next/app'

class MyApp extends App {
  componentDidMount() {
    ReactGA.initialize('UA-177859198-1', { debug: false })
    ReactGA.set({ page: this.props.router.pathname })
    ReactGA.pageview(this.props.router.pathname)
    this.unlisten = this.props.router.events.on(
      'routeChangeComplete',
      (router) => {
        ReactGA.set({ page: router })
        ReactGA.pageview(router)
      }
    )
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
