const projects = [
  {
    title: 'Design-Your-Cake',
    text: 'Full-stack web app where customers design and order custom cakes.',
    alt: 'Illustration representing the Design-Your-Cake web application',
  },
  {
    title: 'Directory Backup Tool',
    text: 'Bash-based multi-level directory backup and restore tool built for my Operating Systems course.',
    alt: 'Illustration representing the directory backup tool',
  },
  {
    title: 'Telco Churn Prediction',
    text: 'Machine learning lab using an SVM to predict customer churn.',
    alt: 'Illustration representing the churn prediction project',
  },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git & GitHub', 'Bash']

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="logo">Siddiqua</a>
          <nav aria-label="Main navigation">
            <ul className="nav-list">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-inner">
            <img
              src="/profile.svg"
              alt="Avatar illustration of Siddiqua"
              className="avatar"
              width="180"
              height="180"
            />
            <div>
              <h1>Hi, I&apos;m Siddiqua</h1>
              <p className="lead">
                Computer Science student and aspiring web developer building
                clean, responsive websites with React.
              </p>
              <a className="btn" href="#projects">View my work</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>About me</h2>
            <p>
              I am a BS Computer Science student at Sukkur IBA University. I
              enjoy turning ideas into working web apps and I am learning
              something new with every project I build.
            </p>
          </div>
        </section>

        <section id="projects" className="section alt">
          <div className="container">
            <h2>Projects</h2>
            <div className="grid">
              {projects.map((p) => (
                <article className="card" key={p.title}>
                  <img src="/project.svg" alt={p.alt} width="400" height="220" />
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2>Skills</h2>
            <ul className="skills">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section alt">
          <div className="container">
            <h2>Contact</h2>
            <p>Want to work together or just say hello? Reach out:</p>
            <p>
              <a href="mailto:siddiquaqureshi41@gmail.com">YOUR_EMAIL</a>
              {' · '}
              <a href="https://github.com/siddiquaqureshi" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Siddiqua. Built with React.</p>
        </div>
      </footer>
    </>
  )
}