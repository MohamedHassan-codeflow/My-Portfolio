import { useEffect, useState } from 'react'
import {
  certifications,
  education,
  experience,
  frontendExperience,
  highlights,
  languages,
  navLinks,
  profile,
  projects,
  skills
} from './data/portfolio'

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="section-header text-center mx-auto mb-5">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="fw-bold mt-2 mb-3">{title}</h2>
      {subtitle && <p className="section-subtitle mb-0">{subtitle}</p>}
    </div>
  )
}

function ThemeToggle({ theme, setTheme }) {
  const selectTheme = (value) => {
    setTheme(value)
    localStorage.setItem('portfolio-theme', value)
  }

  return (
    <div className="theme-toggle" aria-label="Select portfolio theme">
      {['light', 'dark'].map((value) => (
        <button
          key={value}
          type="button"
          className={theme === value ? 'active' : ''}
          onClick={() => selectTheme(value)}
          aria-pressed={theme === value}
        >
          <i className={`bi ${value === 'light' ? 'bi-sun' : 'bi-moon-stars'}`}></i>
          <span>{value === 'light' ? 'Light' : 'Dark'}</span>
        </button>
      ))}
    </div>
  )
}

function Navbar({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', closeMenuOnDesktop)
    return () => window.removeEventListener('resize', closeMenuOnDesktop)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="portfolio-navbar fixed-top" aria-label="Main navigation">
      <div className="container nav-container">
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#home" onClick={closeMenu}>
          <span className="brand-mark">MH</span>
          <span className="brand-text">Mohamed Hassan</span>
        </a>

        <div className="nav-links-desktop" aria-label="Portfolio sections">
          {navLinks.map((item) => (
            <a className="nav-link" href={item.href} key={item.label}>{item.label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <a className="btn btn-primary rounded-pill nav-cv-btn" href={profile.cv} download>
            Download CV
          </a>
          <button
            className={`nav-menu-button ${isMenuOpen ? 'active' : ''}`}
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="mobileNavbar"
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`mobile-nav-menu ${isMenuOpen ? 'show' : ''}`} id="mobileNavbar">
          {navLinks.map((item) => (
            <a className="mobile-nav-link" href={item.href} key={item.label} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="btn btn-primary rounded-pill w-100 mt-2" href={profile.cv} download onClick={closeMenu}>
            Download CV
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header id="home" className="hero-section d-flex align-items-center">
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="hero-badge mb-3">
              <i className="bi bi-lightning-charge-fill me-2"></i>
              Telecom Automation & Front-End Development
            </span>
            <h1 className="display-4 fw-bold hero-title leading-tight mb-3">
              Building smarter telecom workflows and modern web experiences.
            </h1>
            <p className="lead hero-subtitle mb-4">{profile.summary}</p>
            <div className="d-flex flex-wrap gap-3 hero-actions">
              <a className="btn btn-primary btn-lg rounded-pill px-4" href="#projects">
                View Projects
              </a>
              <a className="btn btn-outline-hero btn-lg rounded-pill px-4" href={`mailto:${profile.email}`}>
                Contact Me
              </a>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-3 mt-4 social-row">
              <a href={profile.github} target="_blank" rel="noreferrer"><i className="bi bi-github"></i> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i> LinkedIn</a>
              <a href={profile.portfolio} target="_blank" rel="noreferrer"><i className="bi bi-globe"></i> Portfolio</a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="profile-card shadow-soft">
              <div className="avatar-circle">MH</div>
              <h2 className="fw-bold mb-1">{profile.name}</h2>
              <p className="text-primary fw-semibold mb-3">{profile.title}</p>
              <div className="contact-list">
                <div><i className="bi bi-geo-alt"></i>{profile.location}</div>
                <div><i className="bi bi-envelope"></i>{profile.email}</div>
                <div><i className="bi bi-whatsapp"></i><a href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">{profile.phone}</a></div>
              </div>
              <hr />
              <p className="small muted-text mb-0">
                Open to Front-End Developer, Software Development, Web Development, Data Analysis, Automation, Scripting, remote work, and freelance opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function Highlights() {
  return (
    <section className="stats-strip py-4" aria-label="Professional highlights">
      <div className="container">
        <div className="row g-3">
          {highlights.map((item) => (
            <div className="col-6 col-lg-3" key={item.label}>
              <div className="stat-card text-center">
                <h3 className="fw-bold mb-1">{item.value}</h3>
                <p className="mb-0 muted-text small">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-5">
            <div className="section-panel h-100">
              <span className="eyebrow">About Me</span>
              <h2 className="fw-bold my-3">Engineer focused on automation, telecom operations, and front-end delivery.</h2>
              <p className="muted-text mb-3">
                I combine telecom operations experience with programming and responsive interface development to create tools that reduce repetitive work, improve monitoring, and support better technical decisions.
              </p>
              <p className="about-email mb-4">
                <i className="bi bi-envelope me-2"></i>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
              <a href="#contact" className="btn btn-dark-theme rounded-pill px-4">Let’s Connect</a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="about-tile">
                  <i className="bi bi-cpu"></i>
                  <h5>Automation</h5>
                  <p>Python, JavaScript, and VBA tools for script generation, Excel automation, and workflow improvement.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-tile">
                  <i className="bi bi-window-stack"></i>
                  <h5>Front-End Development</h5>
                  <p>Responsive websites and dashboards using React.js, Vite, Bootstrap, Tailwind CSS, HTML, CSS, and JavaScript.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-tile">
                  <i className="bi bi-reception-4"></i>
                  <h5>Telecom</h5>
                  <p>Strong background in Ericsson systems, 5G, RAN, TRM, MoPs, technical support, and network operations.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-tile">
                  <i className="bi bi-graph-up-arrow"></i>
                  <h5>Data & Reporting</h5>
                  <p>Advanced Excel, Power BI, Tableau, SQL basics, dashboards, team utilization tracking, and performance reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Capabilities"
          subtitle="A balanced skill set across telecom operations, automation, front-end development, dashboards, and reporting."
        />
        <div className="row g-4">
          {skills.map((group) => (
            <div className="col-md-6 col-xl-3" key={group.category}>
              <div className="skill-card h-100">
                <div className="skill-icon"><i className={`bi ${group.icon}`}></i></div>
                <h5 className="fw-bold mb-3">{group.category}</h5>
                <div className="d-flex flex-wrap gap-2">
                  {group.items.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Professional Projects"
          subtitle="Automation tools, telecom dashboards, responsive web platforms, landing pages, and embedded systems."
        />
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-6" key={project.title}>
              <article className="project-card h-100">
                <div className="d-flex justify-content-between align-items-start gap-3 mb-3 project-card-head">
                  <div>
                    <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                    <h4 className="fw-bold mt-2 mb-2">{project.title}</h4>
                    <p className="muted-text mb-0">{project.description}</p>
                  </div>
                  <span className="badge project-badge rounded-pill">{project.type}</span>
                </div>
                <p className="stack-text mb-3">{project.stack}</p>
                <ul className="project-list mb-4">
                  {project.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <div className="project-links mt-auto">
                  {project.repo && (
                    <a className="btn btn-soft rounded-pill" href={project.repo} target="_blank" rel="noreferrer">
                      <i className="bi bi-github me-2"></i>GitHub
                    </a>
                  )}
                  {project.live && (
                    <a className="btn btn-primary rounded-pill" href={project.live} target="_blank" rel="noreferrer">
                      <i className="bi bi-box-arrow-up-right me-2"></i>Vercel Live Demo
                    </a>
                  )}
                  {project.confidentialNote && (
                    <span className="confidential-note">
                      {project.confidentialNote}
                    </span>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Professional Background"
          subtitle="Telecom, operations, technical support, front-end development, automation, scripting, and reporting experience."
        />
        <div className="row g-4 mb-4">
          {frontendExperience.map((job) => (
            <div className="col-lg-6" key={job.title}>
              <div className="timeline-card h-100">
                <div className="d-flex align-items-start gap-3">
                  <div className="timeline-icon"><i className="bi bi-code-square"></i></div>
                  <div>
                    <p className="text-primary fw-bold mb-1">{job.period}</p>
                    <h4 className="fw-bold mb-2">{job.title}</h4>
                    <p className="muted-text mb-3">{job.company}</p>
                    <ul className="project-list mb-0">
                      {job.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="timeline-card h-100">
              <div className="d-flex align-items-start gap-3">
                <div className="timeline-icon"><i className="bi bi-briefcase"></i></div>
                <div>
                  <p className="text-primary fw-bold mb-1">{experience.years}</p>
                  <h4 className="fw-bold mb-3">{experience.title}</h4>
                  <p className="muted-text mb-0">{experience.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="timeline-card h-100">
              <div className="d-flex align-items-start gap-3">
                <div className="timeline-icon"><i className="bi bi-mortarboard"></i></div>
                <div>
                  <p className="text-primary fw-bold mb-1">Education</p>
                  <h4 className="fw-bold mb-2">{education.degree}</h4>
                  <p className="muted-text mb-3">{education.university} - {education.year}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {education.memberships.map((item) => <span className="skill-pill" key={item}>{item}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section-padding section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Certifications"
          title="Certifications & Continuous Learning"
          subtitle="Professional certifications and technical learning across telecom, AI, data analysis, and business."
        />
        <div className="cert-grid">
          {certifications.map((item) => <div className="cert-chip" key={item}><i className="bi bi-patch-check-fill"></i>{item}</div>)}
        </div>
        <div className="language-box mt-4">
          <h5 className="fw-bold mb-3"><i className="bi bi-translate me-2"></i>Languages</h5>
          <div className="d-flex flex-wrap gap-2">
            {languages.map((item) => <span className="skill-pill" key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="contact-card text-center mx-auto">
          <span className="eyebrow">Contact</span>
          <h2 className="fw-bold contact-title my-3">Ready to build automation tools or modern web solutions?</h2>
          <p className="contact-subtitle mb-4">
            Available for front-end development, software development, web development, data analysis, telecom automation, scripting, remote work, and freelance projects.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
            <a className="btn btn-primary rounded-pill px-4" href={`mailto:${profile.email}`}>
              <i className="bi bi-envelope me-2"></i>Email Me
            </a>
            <a className="btn btn-outline-hero rounded-pill px-4" href={profile.cv} download>
              <i className="bi bi-download me-2"></i>Download CV
            </a>
          </div>
          <div className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
            <a href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"><i className="bi bi-whatsapp me-2"></i>{profile.phone}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Highlights />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <footer className="py-4 text-center footer-bottom">
        <div className="container small">© {new Date().getFullYear()} Mohamed Hassan. Built with React, Bootstrap, and Tailwind CSS.</div>
      </footer>
    </>
  )
}

export default App
