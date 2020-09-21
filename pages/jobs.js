import Layout from '../components/Layout'

export default function Jobs() {
  const title = 'Jobs'

  return (
    <Layout title={title} page="jobs">
      <h2>{title}</h2>

      <p>Here is some cool companies I've worked at : </p>

      <div className="card block">
        <a
          href="https://vigie.co"
          style={{ color: 'inherit', textDecoration: 'none' }}
          target="_blank"
        >
          <h2>
            Vigie{' '}
            <img
              style={{
                float: 'right',
                width: '3em',
                display: 'inline-block',
              }}
              src="/images/golang.svg"
              alt="Go"
            />
          </h2>
          <p>
            <em>2020</em>-<em>present</em> <br />
            <br />
            Software developer at Vigie, a sales estimation platform of Amazon,
            Facebook, Vinted, ManoMano, and soon many others...
            <br />I work on the creation of <strong>Go</strong> web crawlers
            able to crawl efficiently through hundreds of thousands of pages per
            day, then extract pertinent information from these pages.
            <br />
            I'm also working on the front-end of Vigie, using Next.js (React),
            deployed on Vercel.
          </p>
        </a>
      </div>

      <br />

      <div className="card fixed block">
        <h2>
          ADYOULIKE{' '}
          <img
            style={{
              float: 'right',
              width: '2em',
              display: 'inline-block',
            }}
            src="/images/python.svg"
            alt="Python"
          />{' '}
          <img
            style={{
              float: 'right',
              width: '3em',
              display: 'inline-block',
            }}
            src="/images/golang.svg"
            alt="Go"
          />
        </h2>
        <p>
          <em>2019</em>-<em>2020</em> <br />
          <br />
          Software developer at Adyoulike, a native advertising company, where I
          maintained and developed new features on a <strong>Go</strong>/
          <strong>Python</strong> codebase, doing thousands of real time bids
          per second. <br /> I was working on a Docker based environment, where
          tests and optimisations were strongly recommended.
        </p>
      </div>

      <br />

      <div className="card block">
        <a
          href="https://www.partoo.co/en"
          style={{ color: 'inherit', textDecoration: 'none' }}
          target="_blank"
        >
          <h2>
            Partoo{' '}
            <img
              style={{
                float: 'right',
                width: '2em',
                display: 'inline-block',
              }}
              src="/images/python.svg"
              alt="Python"
            />
          </h2>
          <p>
            <em>2017</em>-<em>2018</em> <br />
            <br />
            Software developer at Partoo, a startup help businesses to develop
            their online visibility & e-reputation. <br />I implemented some{' '}
            <strong>Python</strong> pipelines to automate data fetching from the
            API/files of our clients, to our database.
            <br />I also contributed to a rewriting of parts of the legacy code
            and added more unit/integration tests.
          </p>
        </a>
      </div>

      <br />

      <div className="card block">
        <a
          href="https://www.thalesgroup.com/en/markets/defence-and-security"
          style={{ color: 'inherit', textDecoration: 'none' }}
          target="_blank"
        >
          <h2>
            THALES Communications & Security{' '}
            <img
              style={{
                float: 'right',
                width: '2em',
                display: 'inline-block',
              }}
              src="/images/c.svg"
              alt="C language"
            />
            <img
              style={{
                float: 'right',
                width: '2em',
                display: 'inline-block',
              }}
              src="/images/python.svg"
              alt="Python"
            />
          </h2>
          <p>
            <em>2017</em> <br />
            <br />
            Intern for 6 month at Thales, a French multinational company that
            provides services for the aerospace, defence, transportation and
            security markets.
            <br />I worked on the conception & implementation of decoders which
            extract data inside protocols, in IP <strong>networks</strong>.
            <br />I used <strong>C</strong>, <strong>Python</strong>,{' '}
            <strong>Wireshark</strong>, and read lots of <strong>RFC</strong> in
            order to understand these different protocols. <br />I also had to
            create different network topologies to test my decoders in a
            controlled environment.
          </p>
        </a>
      </div>

      <br />
    </Layout>
  )
}
