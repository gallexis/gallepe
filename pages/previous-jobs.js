import Layout from '../components/Layout'

export default function PreviousJobs() {
  const title = 'Previous Jobs'

  return (
    <Layout title={title} page="previous-jobs">
      <h2>{title}</h2>

      <p>Here is some cool companies I' ve worked at : </p>

      <blockquote>
        <h2>ADYOULIKE</h2>
        <p>
          <em>2019</em>-<em>2020</em> <br />
          Software developer at Adyoulike, a native advertising company, where I
          maintained and developed new features on a <strong>Go</strong>/
          <strong>Python</strong> codebase, doing thousands of real time bids
          per second. I was working on a Docker based environment, where tests
          and optimisations were strongly recommended.
        </p>
      </blockquote>

      <br />

      <blockquote>
        <h2>Partoo</h2>
        <p>
          <em>2017</em>-<em>2018</em> <br />
          Software developer at Partoo, a startup that helps businesses to develop
          their online visibility & e-reputation. <br />I implemented some{' '}
          <strong>Python</strong> pipelines to automate data fetching from the
          API/files of our clients, to our database.
          <br />I also contributed to a rewriting of parts of the legacy code
          and added more unit/integration tests.
        </p>
      </blockquote>

      <br />

      <blockquote>
        <h2>THALES Communications & Security</h2>
        <p>
          <em>2017</em> <br />
          Intern for 6 month at Thales, a French multinational company that
          provides services for the aerospace, defence, transportation and
          security markets.
          <br />I worked on the conception & implementation of decoders which
          extract data inside protocols, in IP <strong>networks</strong>.<br />I
          used <strong>C</strong>, <strong>Python</strong>,{' '}
          <strong>Wireshark</strong>, and read lots of <strong>RFC</strong> in
          order to understand these different protocols. <br />I also had to
          create different network topologies to test my decoders in a
          controlled environment.
        </p>
      </blockquote>

      <br />
    </Layout>
  )
}
