import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('personal');
  const [activeCategory, setActiveCategory] = useState('game');

  const projects = [
    // KİŞİSEL PROJELER
    {
      id: 1,
      title: 'Mini Tanks War',
      category: 'game',
      section: 'personal',
      description: 'Üretken Akademi bitirme projesi , Etraftaki hareket eden tankları yok et.',
      icon: '🎮',
      technologies: ['Unity', 'C#'],
      link: 'https://normsyt1.itch.io/mini-tanks-war',
      year: 2024,
      role: 'Solo Game Developer'
    },
    {
      id: 2,
      title: 'Helix Jump',
      category: 'game',
      section: 'personal',
      description: 'Zıplayan bir topu , platform arasındaki deliklerden aşağı düşür puanları kazan.',
      icon: '✅',
      technologies: ['Unity', 'C#'],
      link: 'https://normsyt1.itch.io/helix-jump',
      year: 2024,
      role: 'Solo Game Developer'
    },
    {
      id: 3,
      title: 'Balloon Popping Game',
      category: 'game',
      section: 'personal',
      description: 'Süre bitmeden renkli balonları patlat',
      icon: '🧩',
      technologies: ['Unity', 'C#'],
      link: 'https://normsyt1.itch.io/balloon-popping-game',
      year: 2024,
      role: 'Solo Game Developer'
    },
    {
      id: 4,
      title: 'Brick Breaker',
      category: 'game',
      section: 'personal',
      description: 'Tuğları kırarak diğer bölümlere geç. Dikkat et diğer bölümler daha zor',
      icon: '🧩',
      technologies: ['Unity', 'C#'],
      link: 'https://normsyt1.itch.io/brick-breaker',
      year: 2023,
      role: 'Solo Game Developer'
    },
      {
      id: 5,
      title: 'Labyrinth Flower',
      category: 'game',
      section: 'personal',
      description: 'Tuğları kırarak diğer bölümlere geç. Dikkat et diğer bölümler daha zor',
      icon: '🧩',
      technologies: ['Unity', 'C#'],
      link: 'https://normsyt1.itch.io/labyrinth-flower',
      year: 2024,
      role: 'Solo Game Developer'
    },
      {
      id: 6,
      title: 'Colored Balls',
      category: 'game',
      section: 'personal',
      description: 'Tuğları kırarak diğer bölümlere geç. Dikkat et diğer bölümler daha zor',
      icon: '🧩',
      technologies: ['Unity', 'C#'],
      link: 'https://normsyt1.itch.io/colored-balls',
      year: 2024,
      role: 'Solo Game Developer'
    },
    // EKİP PROJELERİ
    {
      id: 5,
      title: 'The Ice Is Watching',
      category: 'game',
      section: 'team',
      description: 'Full-stack e-commerce uygulaması. React ve Node.js ile inşa edilmiş. 3 kişilik ekipte çalışıldı.',
      icon: '🛒',
      technologies: ['Unity', 'C#'],
      link: 'https://store.steampowered.com/app/4367760/The_Ice_is_Watching',
      year: 2026,
      role: 'Programmer, Tester',
      team: ['3x Programmer', '1x Artist', '1x Designer']
    },
    {
      id: 6,
      title: 'Mobile Game - Quest Adventure',
      category: 'software',
      section: 'team',
      description: 'RPG türü mobil oyun. 5 kişilik game studio tarafından geliştirildi. 100K+ indirilmiş.',
      icon: '📱',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      link: 'https://github.com',
      year: 2023,
      role: 'Gameplay Programmer',
      team: ['3x Programmer', '1x Artist', '1x Designer']
    },
    {
      id: 7,
      title: 'Blog Site',
      category: 'software',
      section: 'personal',
      description: 'Kurumsal veri analiz platformu. Gerçek zamanlı dashboard ve raporlama sistemi.',
      icon: '📊',
      technologies: ['C#', 'HTML', 'CSS', 'MSSQL', 'ASP.NET Core MVC'],
      link: 'http://normsytblogv1.somee.com',
      year: 2026,
      role: 'Full Stack Developer',
    },
    {
      id: 8,
      title: 'Food Site',
      category: 'software',
      section: 'personal',
      description: 'Kurumsal veri analiz platformu. Gerçek zamanlı dashboard ve raporlama sistemi.',
      icon: '📊',
      technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
      link: 'https://normsyt1.github.io/REACT-FOOD-SITE/',
      year: 2026,
      role: 'Full Stack Developer',
    }
  ];

  const filteredBySection = projects.filter(p => p.section === activeSection);
  
  const filteredProjects = filteredBySection.filter(p => p.category === activeCategory);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-title">Dev Portfolio</h1>
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
              onClick={() => setActiveSection('personal')}
              className={`section-btn ${activeSection === 'personal' ? 'active' : ''}`}
            >
              👤 Kişisel Projeler
            </button>
            <button
              onClick={() => setActiveSection('team')}
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
                <div key={project.id} className="project-card">
                  <div className="project-image">{project.icon}</div>
                  <div className="project-content">
                    <div className="project-header">
                      <div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-role">{project.role}</p>
                      </div>
                      <span className="project-year">{project.year}</span>
                    </div>

                    <p className="project-description">{project.description}</p>

                    {/* Team Info for Team Projects */}
                    {project.team && (
                      <div className="team-info">
                        <p className="team-title">👥 Ekip Yapısı:</p>
                        <ul className="team-list">
                          {project.team.map((member, idx) => (
                            <li key={idx}>{member}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="technologies">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    <a href={project.link} className="project-link">
                      Projeye git →
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <p>Bu kategoride proje bulunmuyor.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>REACT kullanılarak yapılmıştır</p>
      </footer>
    </div>
  );
}

export default App;