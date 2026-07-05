import React, { useState } from 'react';
import './App.css';
import './Contact.css';
function App() {
  const [activeSection, setActiveSection] = useState('personal');
  const [activeCategory, setActiveCategory] = useState('game');

  const projects = [
    // KİŞİSEL PROJELER
    {
      id: 1,
      title: 'Mini Tanks War',
      image: '/images/Mini_Tanks_War.png',
      category: 'game',
      section: 'personal',
      description: 'Üretken Akademi bitirme projesi , Etraftaki hareket eden tankları yok et.',
      technologies: ['Unity', 'C#'],
      link: 'https://normsyt1.itch.io/mini-tanks-war',
      year: 2024,
      role: 'Solo Game Developer'
    },
    {
      id: 2,
      title: 'Helix Jump',
      image: '/images/Helix_Jump.png',
      category: 'game',
      section: 'personal',
      description: 'Zıplayan Topu boşluklardan geçir, kırmızı engellere çarpmadan aşağı in, skor kazan.',
      technologies: ['Unity', 'C#'],
      link: 'https://normsyt1.itch.io/helix-jump',
      year: 2024,
      role: 'Solo Game Developer'
    },
    {
      id: 3,
      title: 'Balloon Popping Game',
      image: '/images/Balloon_Popping_Game.jpeg',
      category: 'game',
      section: 'personal',
      description: 'Süre bitmeden tüm balonları patlat ve yüksek skor yap.',
      technologies: ['Unity', 'C#'],
      link: 'https://normsyt1.itch.io/balloon-popping-game',
      year: 2024,
      role: 'Solo Game Developer'
    },
    {
      id: 4,
      title: 'Brick Breaker',
      image: '/images/Brick_Breaker.png',
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
      image: '/images/Labyrinth_Flower.png',
      category: 'game',
      section: 'personal',
      description: 'Labirentte yolunu bul, çiçeğe ulaş ve diğer bölüme geç.',
      technologies: ['Unity', 'C#'],
      link: 'https://normsyt1.itch.io/labyrinth-flower',
      year: 2024,
      role: 'Solo Game Developer'
    },
      {
      id: 6,
      title: 'Colored Balls',
      image: '/images/Colored_Balls.png',
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
      image: '/images/The_Ice_Is_Watching.png',
      category: 'game',
      section: 'team',
      description: 'Full-stack e-commerce uygulaması. React ve Node.js ile inşa edilmiş. 3 kişilik ekipte çalışıldı.',
      technologies: ['Unity', 'C#'],
      link: 'https://store.steampowered.com/app/4367760/The_Ice_is_Watching',
      year: 2026,
      role: 'Programmer, Tester',
    },
    {
      id: 8,
      title: 'Kargo/Market Simülatör',
      image: '/images/Cargo_Simulator.png',
      category: 'game',
      section: 'team',
      description: 'Marketini büyüt, siparişleri hazırla ve teslimat yap.',
      technologies: ['Unity', 'C#'],
      link: 'https://github.com',
      year: 2026,
      role: 'Programmer, Tester, Level Designer',    
    },
    {
      id: 20,
      title: 'Blog Site',     
      image: '/images/Blog_Site.png',
      category: 'software',
      section: 'personal',
      description: 'Blog yazıları paylaş, kategorilere göz at ve içerikleri keşfet.',
      technologies: ['C#', 'HTML', 'CSS', 'MSSQL', 'ASP.NET'],
      link: 'http://normsytblogv1.somee.com',
      year: 2026,
      role: 'Full Stack Developer',
    },
    {
      id: 21,
      title: 'Food Site',
      image: '/images/Food_Site.png',
      category: 'software',
      section: 'personal',
      description: 'Lezzetli yemekleri,tatlıları keşfet ve kategorileri inceleyip sipariş ver.',
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
                  <div className="project-image">
                    {project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <div style={{ fontSize: "3.5rem" }}>{project.icon}</div>
                    )}
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
                  <a href="mailto:seninmailin@example.com" className="contact-value">
                    seyitalashan123@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div>
                  <p className="contact-label">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/seyit-ala%C5%9Fhan-12884129a/" target="_blank" rel="noopener noreferrer" className="contact-value">
                    https://www.linkedin.com/in/seyit-ala%C5%9Fhan-12884129a/
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🐙</span>
                <div>
                  <p className="contact-label">GitHub</p>
                  <a href="https://github.com/normsyt1" target="_blank" rel="noopener noreferrer" className="contact-value">
                    github.com/normsyt1
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🎮</span>
                <div>
                  <p className="contact-label">itch.io</p>
                  <a href="https://normsyt1.itch.io" target="_blank" rel="noopener noreferrer" className="contact-value">
                    normsyt1.itch.io
                  </a>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const email = e.target.email.value;
                const message = e.target.message.value;
                window.location.href = `mailto:seninmailin@example.com?subject=Portfolio İletişim - ${name}&body=${message} (Gönderen: ${email})`;
              }}
            >
              <input type="text" name="name" placeholder="Adınız" className="contact-input" required />
              <input type="email" name="email" placeholder="Email adresiniz" className="contact-input" required />
              <textarea name="message" placeholder="Mesajınız" className="contact-textarea" rows="5" required></textarea>
              <button type="submit" className="contact-submit-btn">
                Mesaj Gönder →
              </button>
            </form>
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