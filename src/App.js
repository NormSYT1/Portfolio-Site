import React, { useState, useMemo } from 'react';
import './App.css';
import './Contact.css';

const projects = [
  // KİŞİSEL PROJELER
  {
    id: 1,
    title: 'Mini Tanks War',
    image: process.env.PUBLIC_URL + '/images/Mini_Tanks_War.png',
    category: 'game',
    section: 'personal',
    description: 'Üretken Akademi bitirme projesi, etraftaki hareket eden tankları yok et.',
    technologies: ['Unity', 'C#'],
    link: 'https://normsyt1.itch.io/mini-tanks-war',
    year: 2024,
    role: 'Solo Game Developer'
  },
  {
    id: 2,
    title: 'Helix Jump',
    image: process.env.PUBLIC_URL + '/images/Helix_Jump.png',
    category: 'game',
    section: 'personal',
    description: 'Zıplayan topu boşluklardan geçir, kırmızı engellere çarpmadan aşağı in, skor kazan.',
    technologies: ['Unity', 'C#'],
    link: 'https://normsyt1.itch.io/helix-jump',
    year: 2024,
    role: 'Solo Game Developer'
  },
  {
    id: 3,
    title: 'Balloon Popping Game',
    image: process.env.PUBLIC_URL + '/images/Balloon_Popping_Game.jpeg',
    category: 'game',
    section: 'personal',
    description: 'Zamana karşı yarış, ekrandaki tüm balonları patlatarak en yüksek skoru elde et.',
    technologies: ['Unity', 'C#'],
    link: 'https://normsyt1.itch.io/balloon-popping-game',
    year: 2024,
    role: 'Solo Game Developer'
  },
  {
    id: 4,
    title: 'Brick Breaker',
    image: process.env.PUBLIC_URL + '/images/Brick_Breaker.png',
    category: 'game',
    section: 'personal',
    description: 'Tüm tuğlaları kır ve bölümleri tamamla, ileriki bölümlerde farklı renk tuğlalar seni bekliyor.',
    technologies: ['Unity', 'C#'],
    link: 'https://normsyt1.itch.io/brick-breaker',
    year: 2023,
    role: 'Solo Game Developer'
  },
  {
    id: 5,
    title: 'Labyrinth Flower',
    image: process.env.PUBLIC_URL + '/images/Labyrinth_Flower.png',
    category: 'game',
    section: 'personal',
    description: 'Karmaşık labirentlerde doğru yolu bul, çiçeğe ulaşarak bir sonraki bölüme geç.',
    technologies: ['Unity', 'C#'],
    link: 'https://normsyt1.itch.io/labyrinth-flower',
    year: 2024,
    role: 'Solo Game Developer'
  },
  {
    id: 6,
    title: 'Colored Balls',
    image: process.env.PUBLIC_URL + '/images/Colored_Balls.png',
    category: 'game',
    section: 'personal',
    description: 'Aynı renkteki toplarla etkileşime gir ve en yüksek skoru yap.',
    technologies: ['Unity', 'C#'],
    link: 'https://normsyt1.itch.io/colored-balls',
    year: 2024,
    role: 'Solo Game Developer'
  },
  // EKİP PROJELERİ
  {
    id: 7,
    title: 'The Ice Is Watching',
    image: process.env.PUBLIC_URL + '/images/The_Ice_Is_Watching.png',
    category: 'game',
    section: 'team',
    description: 'Genç kız, gizemli bir yaratıktan kaçarken karlı ormanda kayıp sevgilisini aramaya çalışır.',
    technologies: ['Unity', 'C#'],
    link: 'https://store.steampowered.com/app/4367760/The_Ice_is_Watching',
    year: 2026,
    role: 'Programmer, Tester'
  },
  {
    id: 8,
    title: 'Market Simülatör',
    image: process.env.PUBLIC_URL + '/images/Cargo_Simulator.png',
    category: 'game',
    section: 'team',
    description: 'Marketini büyüt, siparişleri hazırla ve teslimat yap.',
    technologies: ['Unity', 'C#'],
    link: 'https://normsyt1.itch.io/cargomarket-simulator',
    year: 2026,
    role: 'Programmer, Tester, Level Designer'
  },
  {
    id: 20,
    title: 'Blog Site',
    image: process.env.PUBLIC_URL + '/images/Blog_Site.png',
    category: 'software',
    section: 'personal',
    description: 'Blog yazıları paylaş, kategorilere göz at, içerikleri keşfet ve yönet.',
    technologies: ['C#', 'HTML', 'CSS', 'MSSQL', 'ASP.NET'],
    link: 'http://normsytblogv1.somee.com',
    year: 2026,
    role: 'Full Stack Developer'
  },
  {
    id: 21,
    title: 'Food Site',
    image: process.env.PUBLIC_URL + '/images/Food_Site.png',
    category: 'software',
    section: 'personal',
    description: 'Lezzetli yemekleri, tatlıları keşfet ve kategorileri inceleyip sipariş ver.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
    link: 'https://normsyt1.github.io/REACT-FOOD-SITE/',
    year: 2026,
    role: 'Full Stack Developer'
  }
];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-content">
        <div className="project-header">
          <div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-role">{project.role}</p>
          </div>
          <span className="project-year">{project.year}</span>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="technologies">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>
         <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Projeye git →
        </a>
      </div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('personal');
  const [activeCategory, setActiveCategory] = useState('game');

  const filteredProjects = useMemo(
    () =>
      projects
        .filter(p => p.section === activeSection && p.category === activeCategory)
        .sort((a, b) => b.year - a.year),
    [activeSection, activeCategory]
  );

  const handleSectionChange = (section) => {
    setActiveSection(section);
    const hasGame = projects.some(p => p.section === section && p.category === 'game');
    setActiveCategory(hasGame ? 'game' : 'software');
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-title">Personal Portfolio</h1>
          <div className="navbar-links">
            <a href="#projects">Projeler</a>
            <a href="#contact">İletişim</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-emoji">🚀</div>
          <h2 className="hero-title">Oyun & Yazılım Geliştirici</h2>
          <p className="hero-description">
            Unity, ASP.NET Core/MVC, React ile oyunlar ve uygulamalar oluşturuyorum.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">Projeler</h2>

          {/* Section Buttons - Kişisel vs Ekip */}
          <div className="section-buttons">
            <button
              onClick={() => handleSectionChange('personal')}
              aria-pressed={activeSection === 'personal'}
              className={`section-btn ${activeSection === 'personal' ? 'active' : ''}`}
            >
              👤 Kişisel Projeler
            </button>
            <button
              onClick={() => handleSectionChange('team')}
              aria-pressed={activeSection === 'team'}
              className={`section-btn ${activeSection === 'team' ? 'active' : ''}`}
            >
              👥 Ekip Projeleri
            </button>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            {['game', 'software'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat === 'game' ? '🎮 Oyun' : '💻 Yazılım'}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="project-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="empty-state">
                <p>Bu kategoride proje bulunmuyor.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">İletişim</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:seyitalashan123@gmail.com" className="contact-value">
                    seyitalashan123@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div>
                  <p className="contact-label">LinkedIn</p>
                   <a
                    href="https://www.linkedin.com/in/seyit-ala%C5%9Fhan-12884129a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    linkedin.com/in/seyit-alaşhan
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🐙</span>
                <div>
                  <p className="contact-label">GitHub</p>
                  <a
                    href="https://github.com/normsyt1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    github.com/normsyt1
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🎮</span>
                <div>
                  <p className="contact-label">itch.io</p>
                   <a
                    href="https://normsyt1.itch.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    normsyt1.itch.io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>JS/REACT kullanılarak yapılmıştır</p>
      </footer>
    </div>
  );
}

export default App;