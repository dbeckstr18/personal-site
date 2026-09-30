import './App.css'

export default function App() {
  return (
    // The outer wrapper keeps the page content centered and gives it a maximum width.
    <div className="site-shell">
      {/* This link is hidden until focused, which helps keyboard users jump past the header. */}
      <a className="skip-link" href="#main">Skip to content</a>

      {/* Edit the wordmark or navigation links here when you change the site header. */}
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Andrew Beckstrand, home">DB<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      {/* Each section's id matches a navigation href, so links can scroll to that section. */}
      <main id="main">
        {/* The intro is the first thing visitors see. Change the heading and short description here. */}
        <section className="intro" id="home" aria-labelledby="intro-title">
          <p className="eyebrow">Drew Beckstrand</p>
          <h1 id="intro-title">Math. Code.<br /><span>And curiosity.</span></h1>
          <p className="intro-description">I’m Andrew. I’m interested in math, programming, and finance.</p>
          <a className="text-link" href="#projects">What I’m working on <span aria-hidden="true">↗</span></a>
        </section>

        {/* Add or remove personal details and interests in this section. */}
        <section className="content-section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">About me</h2>
          <div>
            <p className="section-copy">I am interested in math, programming, and finance. In my free time, I like to play sports, guitar, and have fun adventures outdoors.</p>
            <ul className="interests" aria-label="Interests">
              <li>Mathematics</li><li>Programming</li><li>Finance</li>
            </ul>
          </div>
        </section>

        {/* Each project can be represented by another article with the same project classes. */}
        <section className="content-section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <article className="project">
            <div className="project-heading">
              <h3>Quantatative Trader</h3>
              <span className="project-status">In progress</span>
            </div>
            <p>A local AI-assisted trading system.</p>
            <p className="project-note">My current project, letting AI do the heavy lifting in trading.</p>
          </article>
        </section>
      </main>

      {/* The footer is shared site information and appears at the bottom of the page. */}
      <footer><span>Andrew Beckstrand</span><span>Personal website</span></footer>
    </div>
  )
}
