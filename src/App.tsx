import './App.css'

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#main" aria-label="Andrew Beckstrand, home">AB<span>.</span></a>
        <a className="header-contact" href="mailto:awbeckstrand@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
      </header>
      <main id="main">
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">BYU · Applied & Computational Mathematics</p>
          <h1 id="intro-title">Andrew<br />Beckstrand<span>.</span></h1>
          <p className="intro-description">I study applied and computational mathematics at Brigham Young University. I'm interested in programming, applied data analysis, and local AI.</p>
          <div className="actions">
            <a className="button" href="/Andrew-Beckstrand-Resume.pdf" target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a>
            <a className="download-link" href="/Andrew-Beckstrand-Resume.pdf" download>Download PDF <span aria-hidden="true">↓</span></a>
          </div>
        </section>
        <section className="content-section" aria-labelledby="interests-title">
          <h2 id="interests-title">Interests</h2>
          <p>Local LLMs, math and problem-solving, applied data analysis, mountain biking, skiing, golf, Mandarin Chinese, and guitar (The Bald Bunnies, SRF).</p>
        </section>
        <section className="content-section" aria-labelledby="connect-title">
          <h2 id="connect-title">Connect</h2>
          <div className="social-links">
            <a href="mailto:awbeckstrand@gmail.com">Email <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/drew-beckstrand" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/dbeckstr18" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <footer><span>Andrew Beckstrand</span><a href="mailto:awbeckstrand@gmail.com">awbeckstrand@gmail.com</a></footer>
    </div>
  )
}
