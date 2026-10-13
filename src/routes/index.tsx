import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CircuitBoard,
  Code2,
  GraduationCap,
  LaptopMinimal,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

import circuitStilllife from "@/assets/avantika-circuit-stilllife.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avantika Bhaskar — B.Tech Student & Technology Enthusiast" },
      {
        name: "description",
        content:
          "Meet Avantika Bhaskar, a B.Tech student at JECRC in Jaipur interested in AI, technology, electronics, and practical digital experiences.",
      },
      { property: "og:title", content: "Avantika Bhaskar — B.Tech Student & Technology Enthusiast" },
      {
        property: "og:description",
        content:
          "An evolving portfolio of ideas, learning, and practical projects by Avantika Bhaskar, a B.Tech student at JECRC in Jaipur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navigation = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
];

const skills = [
  { name: "HTML & CSS", Icon: Code2, group: "Web" },
  { name: "JavaScript", Icon: Workflow, group: "Web" },
  { name: "Web development", Icon: LaptopMinimal, group: "Web" },
  { name: "Python", Icon: CircuitBoard, group: "Technology" },
  { name: "Artificial intelligence", Icon: BrainCircuit, group: "Technology" },
  { name: "Generative AI", Icon: Sparkles, group: "Technology" },
  { name: "Digital productivity", Icon: Lightbulb, group: "Practice" },
];

const projects = [
  {
    number: "01",
    title: "Personal portfolio",
    subtitle: "A personal space for ideas, learning, and work.",
    description:
      "This portfolio brings my interests and selected work together in one welcoming place. It is designed to grow alongside the things I learn and make.",
    stack: ["React", "TanStack Start", "Tailwind CSS"],
    Icon: LaptopMinimal,
    className: "project-art--portfolio",
    status: "This portfolio",
  },
  {
    number: "02",
    title: "AI website project",
    subtitle: "A project space for practical, human-centred AI.",
    description:
      "An AI-focused website idea exploring how thoughtful technology could make an everyday digital experience more useful. Project details and a live link can be added when ready.",
    stack: null,
    Icon: BrainCircuit,
    className: "project-art--ai",
    status: "Details to come",
  },
  {
    number: "03",
    title: "Student productivity project",
    subtitle: "Small, useful ideas for student life.",
    description:
      "A student-focused concept centred on making it easier to organize study, tasks, and everyday learning. Project details and a live link can be added when ready.",
    stack: null,
    Icon: Lightbulb,
    className: "project-art--study",
    status: "Details to come",
  },
];

const milestoneGroups = [
  { category: "Certifications", Icon: Award },
  { category: "Hackathons", Icon: Sparkles },
  { category: "Courses", Icon: GraduationCap },
  { category: "Awards & more", Icon: CheckCircle2 },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const selected = selectedProject === null ? null : projects[selectedProject];

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <div className="portfolio-page">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <a className="wordmark" href="#home" aria-label="Avantika Bhaskar, home">
            <span className="wordmark__initial">A</span>
            <span>Avantika Bhaskar</span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <Button asChild size="sm" className="header-contact">
            <a href="#contact">
              Let’s talk <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label} <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>
        )}
      </header>

      <main id="main-content">
        <section id="home" className="hero-section section-anchor">
          <div className="page-container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow__dot" /> A little curious. A lot to explore.</p>
              <h1>
                Hello, I’m
                <span>Avantika<span className="hero-period">.</span></span>
              </h1>
              <p className="hero-role">B.Tech Student <span>·</span> AI &amp; Technology Enthusiast</p>
              <p className="hero-intro">
                I’m a student at JECRC, learning how technology can turn thoughtful ideas into useful things for everyday life.
              </p>
              <div className="hero-actions">
                <Button asChild size="lg">
                  <a href="#projects">Explore my projects <ArrowRight aria-hidden="true" /></a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#contact">Get in touch <ArrowUpRight aria-hidden="true" /></a>
                </Button>
              </div>
              <div className="hero-location"><MapPin aria-hidden="true" /> Jaipur, India <span className="location-divider">/</span> JECRC</div>
            </div>

            <figure className="hero-figure">
              <div className="hero-photo-wrap">
                <img
                  className="hero-photo"
                  src={circuitStilllife}
                  alt="A small microcontroller and electronic components on a pale blue surface."
                  width={1024}
                  height={1024}
                  fetchPriority="high"
                />
                <div className="photo-index" aria-hidden="true">FIG. 01 <span>—</span> LEARN BY MAKING</div>
              </div>
              <figcaption className="hero-caption">
                <span>A curiosity for how things work.</span>
                <span className="hero-caption__sparkle"><Sparkles aria-hidden="true" /> <span>Always learning</span></span>
              </figcaption>
              <span className="figure-note" aria-hidden="true">Ideas in progress <ArrowDownRight /></span>
            </figure>
          </div>
          <a className="scroll-cue" href="#about"><span>Get to know me</span><ArrowDown aria-hidden="true" /></a>
        </section>

        <div className="profile-strip" aria-label="A few details">
          <div className="profile-strip__inner page-container">
            <span><span className="strip-dot strip-dot--blue" /> B.Tech at JECRC</span>
            <span><span className="strip-dot strip-dot--peach" /> Based in Jaipur, India</span>
            <span><span className="strip-dot strip-dot--lavender" /> Interested in people-first technology</span>
          </div>
        </div>

        <section id="about" className="content-section section-anchor">
          <div className="page-container about-layout">
            <div className="section-heading">
              <p className="eyebrow">01 <span className="eyebrow__line" /> A little about me</p>
              <h2>Curiosity is where <span>it starts.</span></h2>
            </div>
            <div className="about-copy">
              <p className="about-lead">I’m a B.Tech student with a curious mind and a soft spot for technology that solves real problems.</p>
              <p>From artificial intelligence and web development to electronics and digital productivity, I enjoy exploring how things work—and what they could make possible. I’m learning by building practical ideas, one step at a time.</p>
              <a className="text-link" href="#projects">A few things I’m exploring <ArrowDownRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="education" className="education-band section-anchor">
          <div className="page-container education-layout">
            <div>
              <p className="eyebrow">02 <span className="eyebrow__line" /> The learning chapter</p>
              <h2>Building a foundation<br />for what’s next.</h2>
            </div>
            <div className="education-entry">
              <div className="education-entry__icon"><GraduationCap aria-hidden="true" /></div>
              <div className="education-entry__main">
                <p className="education-entry__degree">Bachelor of Technology <span>·</span> B.Tech</p>
                <p className="education-entry__school">JECRC <span>·</span> Jaipur, India</p>
                <p className="education-entry__focus">Learning interests: artificial intelligence, electronics, web development &amp; practical problem-solving.</p>
              </div>
              <span className="education-year">2026</span>
            </div>
          </div>
        </section>

        <section id="skills" className="content-section skills-section section-anchor">
          <div className="page-container">
            <div className="section-heading section-heading--row">
              <div>
                <p className="eyebrow">03 <span className="eyebrow__line" /> Things I’m learning</p>
                <h2>Tools &amp; <span>interests.</span></h2>
              </div>
              <p className="section-aside">A growing toolkit—shaped by curiosity, practice, and the next thing to try.</p>
            </div>
            <div className="skills-grid">
              {skills.map(({ name, Icon, group }, index) => (
                <div className="skill-item" key={name}>
                  <div className={`skill-icon skill-icon--${index % 3}`}><Icon aria-hidden="true" /></div>
                  <div><p className="skill-name">{name}</p><p className="skill-group">{group}</p></div>
                  <ArrowUpRight className="skill-arrow" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section section-anchor">
          <div className="page-container">
            <div className="section-heading section-heading--row">
              <div>
                <p className="eyebrow">04 <span className="eyebrow__line" /> Selected ideas</p>
                <h2>A few things on <span>my mind.</span></h2>
              </div>
              <p className="section-aside">Small steps, useful questions, and plenty of room to keep growing.</p>
            </div>
            <div className="projects-grid">
              {projects.map(({ number, title, subtitle, stack, Icon, className, status }, index) => (
                <article className="project-card" id={`project-${number}`} key={number}>
                  <div className={`project-art ${className}`}>
                    <span className="project-art__number">PROJECT {number}</span>
                    <div className="project-art__symbol"><Icon aria-hidden="true" /></div>
                    <span className="project-art__word" aria-hidden="true">{index === 0 ? "make" : index === 1 ? "imagine" : "organise"}</span>
                    <span className="project-status"><span />{status}</span>
                  </div>
                  <div className="project-card__body">
                    <div className="project-title-line"><span className="project-number">{number} /</span><span className="project-category">{index === 0 ? "Personal site" : index === 1 ? "AI & web" : "Student life"}</span></div>
                    <h3>{title}</h3>
                    <p className="project-subtitle">{subtitle}</p>
                    <div className="project-card__footer">
                      {stack ? (
                        <div className="tech-list" aria-label="Technologies used">
                          {stack.map((tech) => <span key={tech}>{tech}</span>)}
                        </div>
                      ) : (
                        <span className="tech-pending">Project details to come</span>
                      )}
                      <Button variant="ghost" size="icon" aria-label={`View ${title} project details`} onClick={() => setSelectedProject(index)}>
                        <ArrowUpRight aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section section-anchor">
          <div className="page-container experience-layout">
            <div className="experience-intro">
              <p className="eyebrow">05 <span className="eyebrow__line" /> The things in between</p>
              <h2>Experience &amp; <span>activities.</span></h2>
              <p>A space for the people, projects, events, and moments that make learning a little more hands-on.</p>
            </div>
            <div className="experience-placeholder">
              <div className="experience-placeholder__mark"><BriefcaseBusiness aria-hidden="true" /></div>
              <div>
                <p className="experience-placeholder__title">The next chapter is unwritten.</p>
                <p>Volunteering, student activities, events, responsibilities, and future internships.</p>
              </div>
              <span className="placeholder-status">To be continued <ArrowRight aria-hidden="true" /></span>
            </div>
          </div>
        </section>

        <section id="achievements" className="content-section achievement-section section-anchor">
          <div className="page-container">
            <div className="section-heading section-heading--row">
              <div>
                <p className="eyebrow">06 <span className="eyebrow__line" /> Milestones, big &amp; small</p>
                <h2>Things worth <span>celebrating.</span></h2>
              </div>
              <p className="section-aside">A place to collect the milestones still ahead.</p>
            </div>
            <div className="milestone-grid">
              {milestoneGroups.map(({ category, Icon }, index) => (
                <div className="milestone-item" key={category}>
                  <div className={`milestone-icon milestone-icon--${index}`}><Icon aria-hidden="true" /></div>
                  <div><h3>{category}</h3><p>More to share soon</p></div>
                  <span className="milestone-plus" aria-hidden="true">+</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-anchor">
          <div className="contact-ornament" aria-hidden="true"><CircuitBoard /></div>
          <div className="page-container contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">07 <span className="eyebrow__line" /> Say hello</p>
              <h2>Good things<br />start with <span>a conversation.</span></h2>
              <p>Have an idea, an opportunity, or a useful resource to share? I’d be happy to hear from you.</p>
              <Button asChild size="lg" className="contact-cta">
                <a href="mailto:avy@17gmail.com">Write me a note <ArrowUpRight aria-hidden="true" /></a>
              </Button>
            </div>
            <div className="contact-details">
              <a className="contact-line" href="mailto:avy@17gmail.com">
                <span className="contact-line__icon"><Mail aria-hidden="true" /></span>
                <span><span className="contact-line__label">Email</span><span className="contact-line__value">avy@17gmail.com</span></span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <div className="contact-line contact-line--pending">
                <span className="contact-line__icon"><span className="social-letter">in</span></span>
                <span><span className="contact-line__label">LinkedIn</span><span className="contact-line__value">Profile link to be added</span></span>
                <span className="pending-dash" aria-label="Link not provided">—</span>
              </div>
              <div className="contact-line contact-line--pending">
                <span className="contact-line__icon"><span className="social-letter social-letter--github">GH</span></span>
                <span><span className="contact-line__label">GitHub</span><span className="contact-line__value">Profile link to be added</span></span>
                <span className="pending-dash" aria-label="Link not provided">—</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container site-footer__inner">
          <a className="wordmark wordmark--footer" href="#home"><span className="wordmark__initial">A</span><span>Avantika Bhaskar</span></a>
          <p>Made with curiosity <span aria-hidden="true">·</span> Jaipur, India</p>
          <a className="back-to-top" href="#home">Back to top <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </footer>

      {selected && (
        <div className="project-modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedProject(null);
        }}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
            <div className="project-modal__topline"><span>PROJECT {selected.number} <span>—</span> {selected.status}</span>
              <Button type="button" variant="outline" size="icon" aria-label="Close project details" onClick={() => setSelectedProject(null)}><X aria-hidden="true" /></Button>
            </div>
            <p className="eyebrow"><span className="eyebrow__dot" /> A closer look</p>
            <h2 id="project-dialog-title">{selected.title}</h2>
            <p className="project-modal__description">{selected.description}</p>
            <div className="project-modal__details">
              <span>TOOLS &amp; TECHNOLOGIES</span>
              {selected.stack ? (
                <div className="tech-list">{selected.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
              ) : (
                <p>Details to be added as the project takes shape.</p>
              )}
            </div>
            <Button asChild variant="outline">
              <a href="mailto:avy@17gmail.com?subject=I%20would%20love%20to%20hear%20about%20your%20project" onClick={() => setSelectedProject(null)}>
                Ask me about this project <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </section>
        </div>
      )}
    </div>
  );
}