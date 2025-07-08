// main.js
const { useState, useEffect } = React;

const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const slides = [
    {
      title: "РЕАЛЬНАЯ ПОМОЩЬ",
      subtitle: "Конкретные меры поддержки для участников СВО и их семей",
      icon: "volunteer_activism",
      color: "#2E7D32"
    },
    {
      title: "МЕЖВЕДОМСТВЕННОЕ ВЗАИМОДЕЙСТВИЕ", 
      subtitle: "Координация всех государственных структур для максимальной эффективности",
      icon: "account_balance",
      color: "#1565C0"
    },
    {
      title: "ПОЛЬЗОВАТЕЛЬСКОЕ ВЗАИМОДЕЙСТВИЕ",
      subtitle: "Простой и понятный интерфейс для получения всех видов поддержки",
      icon: "people",
      color: "#E65100"
    }
  ];

  const services = [
    { icon: "local_hospital", title: "Медицинская помощь", desc: "Полный спектр медицинских услуг" },
    { icon: "home", title: "Жилищная поддержка", desc: "Помощь в решении жилищных вопросов" },
    { icon: "school", title: "Образование", desc: "Льготы на обучение детей" },
    { icon: "work", title: "Трудоустройство", desc: "Содействие в поиске работы" },
    { icon: "security", title: "Правовая защита", desc: "Юридическая поддержка" },
    { icon: "family_restroom", title: "Семейная поддержка", desc: "Помощь семьям участников" }
  ];

  const stats = [
    { number: "50,000+", label: "Семей получили помощь" },
    { number: "24/7", label: "Круглосуточная поддержка" },
    { number: "100%", label: "Гарантия рассмотрения" },
    { number: "15", label: "Видов поддержки" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="logo-container">
            <div className="main-logo">
              <span className="material-icons logo-icon">volunteer_activism</span>
              <div className="logo-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
            </div>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">ПОМОЩЬ УЧАСТНИКАМ СВО</span>
            <span className="title-line">И ЧЛЕНАМ ИХ СЕМЕЙ</span>
          </h1>
          
          <div className="hero-slider">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ '--slide-color': slide.color }}
              >
                <div className="slide-icon">
                  <span className="material-icons">{slide.icon}</span>
                </div>
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
            ))}
          </div>
          
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          
          <button className="cta-button">
            <span>Получить помощь</span>
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className={`stats-section ${isVisible.stats ? 'animate' : ''}`}
        id="stats"
        data-animate
      >
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ '--delay': `${index * 0.1}s` }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className={`services-section ${isVisible.services ? 'animate' : ''}`}
        id="services"
        data-animate
      >
        <div className="container">
          <h2 className="section-title">Виды поддержки</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  <span className="material-icons">{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        className={`features-section ${isVisible.features ? 'animate' : ''}`}
        id="features"
        data-animate
      >
        <div className="container">
          <div className="features-content">
            <div className="features-text">
              <h2>Почему выбирают нас?</h2>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="material-icons">check_circle</span>
                  <span>Быстрое рассмотрение заявок</span>
                </div>
                <div className="feature-item">
                  <span className="material-icons">check_circle</span>
                  <span>Персональный подход</span>
                </div>
                <div className="feature-item">
                  <span className="material-icons">check_circle</span>
                  <span>Полная конфиденциальность</span>
                </div>
                <div className="feature-item">
                  <span className="material-icons">check_circle</span>
                  <span>Профессиональная поддержка</span>
                </div>
              </div>
            </div>
            <div className="features-visual">
              <div className="floating-elements">
                <div className="floating-card card-1">
                  <span className="material-icons">trending_up</span>
                  <span>Эффективность</span>
                </div>
                <div className="floating-card card-2">
                  <span className="material-icons">security</span>
                  <span>Надежность</span>
                </div>
                <div className="floating-card card-3">
                  <span className="material-icons">people</span>
                  <span>Доступность</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Не откладывайте получение помощи</h2>
            <p>Мы готовы помочь вам прямо сейчас</p>
            <div className="cta-buttons">
              <button className="btn-primary">
                Подать заявление
                <span className="material-icons">arrow_forward</span>
              </button>
              <button className="btn-secondary">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ReactDOM.render(<MainPage />, document.getElementById('root'));