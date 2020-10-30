import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title, page }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Alexis Gallepe is a software developer, web developer, gamer & music lover."
        />
        <meta
          property="og:description"
          content="Alexis Gallepe is a software developer, web developer, gamer & music lover."
        />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://gallepe.com/" />
        <meta property="og:type" content="website" />
        <meta property="article:author" content="https://gallepe.com/" />
        <meta
          property="og:image"
          content="https://gallepe.com/images/gallexis.jpg"
        />
        <link rel="canonical" href={'https://gallepe.com/' + page} />
        <link rel="icon" type="image/svg" href="/favicon/gallexis.svg" />
        <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1/new.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/blocks.css/dist/blocks.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window._mfq = window._mfq || [];(function() {var mf = document.createElement("script");mf.type = "text/javascript"; mf.defer = true;mf.src = "//cdn.mouseflow.com/projects/52906df2-328b-46e1-a54c-05afddd042be.js";document.getElementsByTagName("head")[0].appendChild(mf);})();
        `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(window, document){
                  if (window.location.host ==='gallepe.com'){
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "3vxhjw1vne");
                  }
              })(window, document);
        `,
          }}
        />
        <title>{title} &raquo; gallepe.com</title>
      </Head>

      <header style={{ position: 'relative' }}>
        <img
          style={{
            float: 'right',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
          src="/images/gallexis.jpg"
          alt="Alexis Gallèpe"
        />
        <h1 style={{ display: 'inline-block', verticalAlign: 'middle' }}>
          Alexis Gallèpe
        </h1>

        <nav>
          <Link href="/">
            <a>About</a>
          </Link>
          / 👨‍💻{' '}
          <Link href="/jobs">
            <a>Jobs</a>
          </Link>
          / 📝{' '}
          <a href="mailto:gallexis@protonmail.com" target="_blank">
            Contact Me
          </a>
        </nav>
      </header>

      <main>{children}</main>
    </>
  )
}
