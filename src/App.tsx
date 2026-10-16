import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [about, setAbout] = useState(window.location.hash === '#about')
  useEffect(() => {
    const update = () => { if (['#about', '#home', ''].includes(window.location.hash)) { setAbout(window.location.hash === '#about'); window.scrollTo(0, 0) } }
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  useEffect(() => { document.title = about ? 'About | Andrew Beckstrand' : 'Andrew Beckstrand' }, [about])
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Andrew Beckstrand, home">AB<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#home" aria-current={!about ? 'page' : undefined}>Resume</a>
          <a href="#about" aria-current={about ? 'page' : undefined}>About</a>
        </nav>
        <a className="header-contact" href="mailto:awbeckstrand@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
      </header>
      <main id="main">
        {about ? <>
          <section className="about-intro" aria-labelledby="about-title">
            <p className="eyebrow">A little about me</p>
            <h1 id="about-title">Outside the classroom<span>.</span></h1>
            <p className="about-description">My name is Drew Beckstrand, and I'm from Holladay Utah. I am currently attending Brigham Young University, and in my free time I like to play guitar, be outdoors, mountain bike, and ski</p>
          </section>
          <section className="hobby" aria-labelledby="guitar-title">
            <div className="hobby-copy"><h2 id="guitar-title">Guitar</h2>
              <p>I started playing guitar in 2019, and I have enjoyed it as a hobby ever since. I like learning new songs, jamming with my friends, and playing for people. My favorite guitarist is Eddie Van Halen, and I also like to play John Mayer and Jack Johnson.</p>
            </div>
            <div className="photo-grid guitar-photos">
              <figure><img src="/images/guitar-concert.jpg" width="553" height="553" alt="Drew playing electric guitar onstage with the Soul Research Foundation" /><figcaption>Playing a concert with the Soul Research Foundation.</figcaption></figure>
              <figure><img src="/images/partscaster-transparent.png" width="1086" height="1448" alt="The custom blue partscaster guitar Drew built" loading="lazy" /><figcaption>The custom partscaster guitar I built over a summer</figcaption></figure>
            </div>
          </section>
          <section className="hobby" aria-labelledby="biking-title">
            <div className="hobby-copy"><h2 id="biking-title">Mountain biking</h2>
              <p>I started to take mountain biking seriously when I was 15. I joined my high school mountain biking team, and raced with them all 4 years of high school. I love to go fast downhill and test my limits on jumps and technical trails. Some of my favorite places in Utah to go are the Wasatch Crest Trail, Levitate trail in Draper, and Deer Valley bike park.</p>
            </div>
            <div className="photo-grid biking-photos">
              <figure><img src="/images/nica-eagle-mountain.jpg" width="1488" height="2114" alt="Drew racing his mountain bike on a rocky course at Eagle Mountain" loading="lazy" /><figcaption>Racing with NICA at Eagle Mountain</figcaption></figure>
              <figure><img src="/images/vernal-preride.jpg" width="1024" height="768" alt="Drew and a friend with their mountain bikes on a race course in Vernal" loading="lazy" /><figcaption>Pre-riding a race course in Vernal, UT</figcaption></figure>
            </div>
          </section>
        </> : <>
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
        </>}
      </main>
      <footer><span>Andrew Beckstrand</span><a href="mailto:awbeckstrand@gmail.com">awbeckstrand@gmail.com</a></footer>
    </div>
  )
}
