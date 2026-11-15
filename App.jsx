
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "C++",
  "Python",
  "MySQL",
];

const projects = [
  {
    number: "01",
    name: "Nova AI",
    category: "AI / Web Development",
    description:
      "An educational AI-powered historical chart analysis project.",
  },
  {
    number: "02",
    name: "Portfolio Website",
    category: "Frontend Development",
    description:
      "A modern personal portfolio with responsive design.",
  },
  {
    number: "03",
    name: "Academic Management",
    category: "C++ / OOP",
    description:
      "A console-based academic management system.",
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ABDULLAH<span>.</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

function BottomNavigation() {
  const items = [
    { path: "/", label: "Home", icon: "⌂" },
    { path: "/about", label: "About", icon: "◉" },
    { path: "/skills", label: "Skills", icon: "✦" },
    { path: "/projects", label: "Projects", icon: "▣" },
    { path: "/contact", label: "Contact", icon: "✉" },
  ];

  return (
    <div className="bottom-navigation">
      {items.map((item) => (
        <NavLink
          to={item.path}
          end={item.path === "/"}
          key={item.path}
        >
          <span>{item.icon}</span>
          <small>{item.label}</small>
        </NavLink>
      ))}
    </div>
  );
}

function Page({ children }) {
  const location = useLocation();

  return (
    <main className="page-content" key={location.pathname}>
      {children}
    </main>
  );
}

function Home() {
  return (
    <Page>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">WELCOME TO MY WORLD</p>

          <h1>
            Muhammad
            <span> Abdullah.</span>
          </h1>

          <h2>Software Engineering Student</h2>

          <p className="description">
            I am passionate about technology, programming and
            building modern digital experiences. I enjoy learning
            new technologies and creating useful projects.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-btn">
              Explore My Work ↗
            </Link>
            <Link to="/about" className="secondary-btn">
              Discover More
            </Link>
          </div>

          <div className="hero-stats">
            <div><h3>03+</h3><p>Projects</p></div>
            <div><h3>07+</h3><p>Skills</p></div>
            <div><h3>100%</h3><p>Dedication</p></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="video-frame">
            <img
              className="profile-video"
              src="/intro-photo.png"
              alt="Muhammad Abdullah"
            />

            <div className="photo-nameplate">
              <span>MUHAMMAD ABDULLAH</span>
              <small>SOFTWARE ENGINEERING</small>
            </div>
          </div>

          <div className="floating-tag">
            <span className="status-dot"></span>
            Always Learning
          </div>
        </div>
      </section>

      <section className="home-extra">
        <p className="eyebrow">A LITTLE ABOUT MY JOURNEY</p>
        <h2>Building My Future Through <span>Technology.</span></h2>
        <p>
          Every project is a new opportunity to learn,
          improve and create something meaningful.
        </p>
        <Link to="/about" className="primary-btn">
          More About Me ↗
        </Link>
      </section>

      <section className="home-bottom">
        <span>DESIGNING</span>
        <span>DEVELOPING</span>
        <span>LEARNING</span>
      </section>
    </Page>
  );
}

function About() {
  return (
    <Page>
      <section className="inner-page">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h1 className="page-title">About <span>Me.</span></h1>

        <div className="about-card">
          <div>
            <h2>Who Am I?</h2>
            <p>
              My name is Muhammad Abdullah. I am a Software
              Engineering student interested in web development,
              artificial intelligence and programming.
            </p>
            <p>
              My goal is to become a skilled software developer
              and build useful digital products.
            </p>
          </div>

          <div className="about-details">
            <div>
              <span>Name</span>
              <strong>Muhammad Abdullah</strong>
            </div>
            <div>
              <span>Field</span>
              <strong>Software Engineering</strong>
            </div>
            <div>
              <span>Interest</span>
              <strong>Web Development & AI</strong>
            </div>
            <div>
              <span>Education</span>
              <strong>University Student</strong>
            </div>
          </div>
        </div>

        <div className="education-card">
          <p className="eyebrow">MY JOURNEY</p>
          <h2>Education</h2>
          <h3>Software Engineering</h3>
          <p>Currently pursuing my university degree.</p>
        </div>
      </section>
    </Page>
  );
}

function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      category: "Programming",
      items: ["C++", "Python"],
    },
    {
      category: "Database",
      items: ["MySQL"],
    },
  ];

  let skillNumber = 0;

  return (
    <Page>
      <section className="inner-page">
        <p className="eyebrow">WHAT I WORK WITH</p>
        <h1 className="page-title">My <span>Skills.</span></h1>

        <p className="description">
          Technologies and tools I am learning in my development journey.
        </p>

        {skillCategories.map((group) => (
          <div className="skill-category" key={group.category}>
            <h2 className="skill-category-title">
              {group.category}
            </h2>

            <div className="skills-grid">
              {group.items.map((skill) => {
                skillNumber += 1;

                return (
                  <div className="skill-card" key={skill}>
                    <span>
                      {String(skillNumber).padStart(2, "0")}
                    </span>
                    <h2>{skill}</h2>
                    <p>Learning & Development</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </Page>
  );
}

function Projects() {
  return (
    <Page>
      <section className="inner-page">
        <p className="eyebrow">MY RECENT WORK</p>
        <h1 className="page-title">Selected <span>Projects.</span></h1>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <span className="project-number">
                {project.number}
              </span>
              <p className="eyebrow">{project.category}</p>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <span className="project-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>
    </Page>
  );
}

function Contact() {
  return (
    <Page>
      <section className="inner-page contact-page">
        <p className="eyebrow">LET'S CONNECT</p>

        <h1 className="page-title">
          Let's Work <span>Together.</span>
        </h1>

        <p className="description">
          Have a project idea or want to connect?
          Feel free to send me a message.
        </p>

        <div className="contact-container">

          <div className="contact-card">
            <h2>Contact Information</h2>
            <p>Let's connect and create something meaningful.</p>

            <a
              className="contact-link"
              href="mailto:imabdullahhere27@gmail.com"
            >
              <span>Email</span>
              <strong>
                imabdullahhere27@gmail.com ↗
              </strong>
            </a>

            <a
              className="contact-link"
              href="https://wa.me/923222379891"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>WhatsApp</span>
              <strong>Send a WhatsApp Message ↗</strong>
            </a>

            <a
              className="contact-link"
              href="https://github.com/imabdullahhere27-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <strong>imabdullahhere27-code ↗</strong>
            </a>
          </div>

          <div className="contact-card">
            <h2>Send Me a Message</h2>
            <p>Your message will be forwarded to my email.</p>

            <form
              className="contact-form"
              action="https://formsubmit.co/imabdullahhere27@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Message"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                required
              />

              <button type="submit" className="primary-btn">
                Send Message ↗
              </button>
            </form>
          </div>

        </div>
      </section>
    </Page>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Muhammad Abdullah. All rights reserved.</p>
      <p>Designed with <span>♥</span> and React.</p>
    </footer>
  );
}

function AppLayout() {
  return (
    <div className="website">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <BottomNavigation />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

