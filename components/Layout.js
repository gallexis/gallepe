import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title }) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta
          name="description"
          content="Alexis Gallepe is a software developer, web developer, gamer, music and carnivorous plant lover."
        />
        <meta
          property="og:description"
          content="Alexis Gallepe is a software developer, web developer, gamer music and carnivorous plant lover."
        />
        <meta property="og:title" content={title}/>
        <meta property="og:url" content="https://gallepe.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="article:author" content="https://gallepe.com/"/>
        <meta
          property="og:image"
          content="https://gallepe.com/images/gallexis.jpg"
        />
        <link rel="canonical" href="https://gallepe.com/"/>
        <link rel="icon" type="image/svg" href="/favicon/gallexis.svg"/>
        <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css"/>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@exampledev/new.css"
        />
        <title>{title} &raquo; gallepe.com</title>
      </Head>

      <header style={{ position: 'relative' }}>
        <img style={{
          float: 'right',
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          display: 'inline-block',
          verticalAlign: 'middle'
        }} src="/images/gallexis.jpg" alt="Alexis Gallèpe"/>
        <h1 style={{ display: 'inline-block', verticalAlign: 'middle' }}>Alexis Gallèpe</h1>

        <nav>
          <Link href="/">
            <a>About</a>
          </Link>
          / 👨‍💻{' '}
          <Link href="/previous-jobs">
            <a>Previous Jobs</a>
          </Link>
          / 📝{' '}
          <a href="mailto:gallexis@protonmail.com" target="_blank">
            Contact Me
          </a>
        </nav>
      </header>

      <main>{children}</main>
    </html>
  )
}
