import ReactGA from 'react-ga';
import App from 'next/app'

class MyApp extends App {
  componentDidMount() {
    ReactGA.initialize('UA-177859198-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { Component, pageProps } = this.props
    return (
     <Component {...pageProps} />
    )
  }
}

export default MyApp
