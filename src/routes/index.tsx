import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu, X, Mail, Linkedin, Github, MapPin, GraduationCap, Code2, Palette, FileCode,
  Terminal, Brain, Sparkles, Globe, Zap, ArrowRight, Award, Trophy, BookOpen, BadgeCheck,
  Users, CalendarDays, Briefcase, HeartHandshake, Cpu, Plus,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avantika Bhaskar — B.Tech Student & AI Enthusiast" },
      { name: "description", content: "Portfolio of Avantika Bhaskar, a B.Tech student at JECRC, Jaipur, exploring AI, web development and electronics." },
      { property: "og:title", content: "Avantika Bhaskar — Portfolio" },
      { property: "og:description", content: "B.Tech student at JECRC exploring AI, web development and electronics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "avy@17gmail.com";
const LINKEDIN = "#"; // TODO: add LinkedIn URL
const GITHUB = "#"; // TODO: add GitHub URL

const nav = [
  ["About", "about"], ["Education", "education"], ["Skills", "skills"], ["Projects", "projects"],
  ["Experience", "experience"], ["Achievements", "achievements"], ["Contact", "contact"],
];

const skills = [
  { name: "HTML", icon: FileCode, tone: "bg-sky" },
  { name: "CSS", icon: Palette, tone: "bg-lavender" },
  { name: "JavaScript", icon: Code2, tone: "bg-cream" },
  { name: "Python", icon: Terminal, tone: "bg-sky" },
  { name: "Artificial Intelligence", icon: Brain, tone: "bg-lavender" },
  { name: "Generative AI", icon: Sparkles, tone: "bg-cream" },
  { name: "Web Development", icon: Globe, tone: "bg-sky" },
  { name: "Digital Productivity", icon: Zap, tone: "bg-lavender" },
];

const projects = [
  { title: "Personal Portfolio Website", desc: "A responsive, accessible portfolio to showcase my learning journey, skills and projects.", tech: ["React", "Tailwind CSS", "Vite"] },
  { title: "AI Website Project", desc: "A web experience that explores how AI tools can make everyday information easier to use.", tech: ["JavaScript", "Generative AI", "HTML/CSS"] },
  { title: "Student Productivity Project", desc: "A simple tool to help students organise tasks, plan study time and stay focused.", tech: ["Python", "Productivity", "Web"] },
];

const experience = [
  { icon: HeartHandshake, title: "Volunteering" },
  { icon: Users, title: "Student Activities" },
  { icon: CalendarDays, title: "Events" },
  { icon: Briefcase, title: "Responsibilities & Internships" },
];

const achievements = [
  { icon: BadgeCheck, title: "Certifications" },
  { icon: Trophy, title: "Hackathons" },
  { icon: BookOpen, title: "Courses" },
  { icon: Award, title: "Awards" },
  { icon: Sparkles, title: "Other Achievements" },
];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Placeholder({ icon: Icon, title }: { icon: typeof Award; title: string }) {
  return (
    <div className="card-soft p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground"><Icon className="h-5 w-5" /></span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="mt-5 rounded-xl border border-dashed border-border bg-muted/60 p-4 text-sm text-muted-foreground">
        <p className="flex items-center gap-2"><Plus className="h-4 w-4" /> Details coming soon</p>
        <p className="mt-1 text-xs">Title · Organisation · Date</p>
      </div>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#home" className="font-display text-xl font-semibold">Avantika<span className="text-primary">.</span></a>
          <nav className="hidden lg:flex gap-1">
            {nav.map(([l, id]) => (
              <a key={id} href={`#${id}`} className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">{l}</a>
            ))}
          </nav>
          <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="lg:hidden rounded-lg p-2 hover:bg-accent">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden border-t border-border bg-background px-5 py-3 flex flex-col">
            {nav.map(([l, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 hover:bg-accent">{l}</a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden circuit-bg">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 md:grid-cols-[1.3fr_1fr]">
            <div className="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                <MapPin className="h-4 w-4" /> Jaipur, India · JECRC
              </span>
              <h1 className="mt-6 text-5xl sm:text-7xl font-semibold leading-[1.05]">
                Hi, I'm <em className="text-primary">Avantika</em>
              </h1>
              <p className="mt-4 text-lg sm:text-xl font-medium text-secondary-foreground">B.Tech Student | AI &amp; Technology Enthusiast</p>
              <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
                I love exploring how technology, artificial intelligence and electronics can solve real-life problems — and I'm building practical projects along the way.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold transition hover:bg-accent">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm floaty" aria-hidden>
              <div className="aspect-square rounded-[2.5rem] bg-gradient-to-br from-sky via-cream to-lavender p-8 shadow-[var(--shadow-lift)]">
                <svg viewBox="0 0 200 200" className="h-full w-full text-primary">
                  <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".7">
                    <path d="M100 20v40M100 140v40M20 100h40M140 100h40M45 45l28 28M155 45l-28 28M45 155l28-28M155 155l-28-28" />
                  </g>
                  <g fill="currentColor">
                    {[[100,20],[100,180],[20,100],[180,100],[45,45],[155,45],[45,155],[155,155]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />)}
                  </g>
                  <rect x="62" y="62" width="76" height="76" rx="16" className="fill-card" stroke="currentColor" strokeWidth="2.5" />
                  <text x="100" y="110" textAnchor="middle" className="fill-primary" style={{ font: "600 26px Fraunces, serif" }}>AI</text>
                </svg>
              </div>
              <Cpu className="absolute -left-4 -bottom-4 h-14 w-14 rounded-2xl bg-card p-3 text-primary shadow-[var(--shadow-soft)]" />
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="About Me" title="Curious mind, practical builder">
          <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
            <div className="card-soft p-7 text-muted-foreground leading-relaxed space-y-4">
              <p>I'm a dedicated B.Tech student interested in technology, artificial intelligence, web development and digital productivity. I'm actively learning modern technologies and turning ideas into practical projects.</p>
              <p>My curiosity extends to electronics and how hardware and software meet. I enjoy learning by doing — experimenting, asking questions and solving real-life problems one small project at a time.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["AI", "Exploring"], ["Web", "Building"], ["Electronics", "Tinkering"], ["Always", "Learning"]].map(([a, b]) => (
                <div key={a} className="card-soft p-5 text-center">
                  <p className="font-display text-xl font-semibold text-primary">{a}</p>
                  <p className="text-sm text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="education" eyebrow="Education" title="Where I'm learning">
          <div className="card-soft p-7 flex flex-col sm:flex-row gap-6">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sky text-secondary-foreground"><GraduationCap className="h-7 w-7" /></span>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl font-semibold">Bachelor of Technology (B.Tech)</h3>
                <span className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">2026</span>
              </div>
              <p className="mt-1 text-muted-foreground">JECRC, Jaipur</p>
              <p className="mt-5 text-sm font-semibold">Relevant learning areas</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Programming", "Artificial Intelligence", "Web Technologies", "Electronics", "+ Add more"].map((t) => (
                  <span key={t} className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="What I work with">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map(({ name, icon: Icon, tone }) => (
              <div key={name} className="card-soft p-5">
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${tone} text-primary`}><Icon className="h-6 w-6" /></span>
                <p className="mt-4 font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Things I'm building">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <article key={p.title} className="card-soft flex flex-col overflow-hidden">
                <div className={`h-32 circuit-bg ${["bg-sky", "bg-lavender", "bg-cream"][i]}`} />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">{t}</span>)}
                  </div>
                  <a href="#" className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:bg-primary hover:text-primary-foreground">
                    View Project <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience & Activities" title="Beyond the classroom">
          <div className="grid gap-5 sm:grid-cols-2">
            {experience.map((e) => <Placeholder key={e.title} {...e} />)}
          </div>
        </Section>

        <Section id="achievements" eyebrow="Achievements" title="Milestones along the way">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a) => <Placeholder key={a.title} {...a} />)}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let's connect">
          <div className="card-soft p-8 sm:p-10 bg-gradient-to-br from-card to-accent/40">
            <p className="max-w-xl text-muted-foreground">Open to internships, collaborations and conversations about tech and AI. Feel free to reach out!</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: Linkedin, label: "LinkedIn", value: "Add your profile", href: LINKEDIN },
                { icon: Github, label: "GitHub", value: "Add your profile", href: GITHUB },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><Icon className="h-5 w-5" /></span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">{label}</span>
                    <span className="block truncate text-sm text-muted-foreground">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border bg-muted/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Avantika Bhaskar · Jaipur, India</p>
          <div className="flex gap-2">
            <a aria-label="Email" href={`mailto:${EMAIL}`} className="rounded-full p-2 hover:bg-accent"><Mail className="h-4 w-4" /></a>
            <a aria-label="LinkedIn" href={LINKEDIN} className="rounded-full p-2 hover:bg-accent"><Linkedin className="h-4 w-4" /></a>
            <a aria-label="GitHub" href={GITHUB} className="rounded-full p-2 hover:bg-accent"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
