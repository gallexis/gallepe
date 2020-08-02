import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Alexis Gallèpe">
      <p>
        👋 Hello! I'm Alexis Gallèpe, a 27 years old Software Developer,
        currently living in Lille (North of France). Follow me on{' '}
        <a
          href="https://github.com/gallexis"
          title="Follow me on Github"
          target="_blank"
        >
          Github
        </a>
        ,{' '}
        <a
          href="https://www.linkedin.com/in/alexis-gall%C3%A8pe-25064715b"
          title="Follow me on Linkedin"
          target="_blank"
        >
          Linkedin
        </a>{' '}
        or download my
        <a
          href="/resume-alexis-gallepe-2020.pdf"
          title="my resume"
          target="_blank"
        >
          {' '}
          résumé
        </a>
        .
      </p>

      <p>Here is some cool projects I' ve worked on : </p>

      <blockquote>
        <a
          href="https://github.com/gallexis/pytorrent"
          style={{ color: 'inherit', textDecoration: 'none' }}
          target="_blank"
        >
          <h2>PyTorrent</h2>
          <p>
            <em>(2015)</em> CLI tool that downloads files from the BitTorrent
            network.
            <br />
            My first personal project, made to learn how does a decentralized
            protocol work and improve my Python/Network skills.
            <br />
            It is almost written from scratch using <strong>Python 3.7</strong>.
          </p>
        </a>
      </blockquote>

      <br />

      <blockquote>
        <a
          href="https://github.com/gallexis/go-kademlia"
          style={{ color: 'inherit', textDecoration: 'none' }}
          target="_blank"
        >
          <h2>Kademlia</h2>
          <p>
            <em>(2018)</em> An attempt to implement the Kademlia protocol using
            the <strong>Go</strong> language.
            <br />
            Kademlia is a Distributed Hash Table (DHT) protocol for
            decentralized peer-to-peer computer networks and is mainly used in
            BitTorrent to find peers without relying on a tracker server.
            <br />I first read the Kademlia protocol then, once implemented the
            appropriate data structures, started to fight with the un-connected
            UDP protocol (made me realize how much of a privilege it is to work
            with TCP)
          </p>
        </a>
      </blockquote>

      <br />

      <blockquote>
        <a
          href="https://github.com/gallexis/go-kademlia"
          style={{ color: 'inherit', textDecoration: 'none' }}
          target="_blank"
        >
          <h2>Bitpy</h2>
          <p>
            <em>(2016)</em> Attempt to implement a <strong>Wireshark</strong>{' '}
            like program, where we can see messages sent & received by the{' '}
            <strong>Bitcoin</strong> protocol.
            <br />
            Written with Shlomi Zeltsinger, we can send and receive Version,
            Ping, Pongs, Verack, and Getblock messages. <br />
            The code is in <strong>Python 3.5</strong>. The GUI was built using
            pyqt.
          </p>
        </a>
      </blockquote>

      <hr />
      <br />

      <p>
        You can find out more on my{' '}
        <a
          href="https://github.com/gallexis"
          title="Follow me on Github"
          target="_blank"
        >
          Github
        </a>{' '}
        page.
      </p>
    </Layout>
  )
}
