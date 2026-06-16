function Hero() {
  return (
    <section id="hero">
      <div className="hero-text" data-aos="fade-right">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Open to internships
        </div>
        <h1>Hi, I'm <span>Joel Dsilva</span></h1>
        <p>Full stack developer who builds real web apps. I like solving problems and shipping things that work.</p>
        <div className="hero-buttons">
          <a href="#projects"><button>View Projects</button></a>
          <a href="#contact"><button>Contact Me</button></a>
        </div>
         <div className="hero-socials">
            <a href="https://github.com/Joel0804" target="_blank" className="social-pill">GitHub</a>
            <a href="https://www.linkedin.com/in/joel-dsilva-855524310/" target="_blank" className="social-pill">LinkedIn</a>
         </div>
      </div>
      <div className="hero-image" data-aos="fade-left">
        <img src="/joel.jpeg" alt="Joel Dsilva" />
      </div>
    </section>
  )
}

export default Hero