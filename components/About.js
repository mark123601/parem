function About() {
  try {
    const [language, setLanguage] = React.useState(localStorage.getItem('language') || 'et');

    React.useEffect(() => {
      const handleLanguageChange = (e) => {
        setLanguage(e.detail);
      };
      window.addEventListener('languageChange', handleLanguageChange);
      return () => window.removeEventListener('languageChange', handleLanguageChange);
    }, []);

    const t = translations[language].about;

    return (
      <section id="about" className="py-20 bg-white" data-name="about" data-file="components/About.js">
        <div className="container mx-auto px-6">
          <h2 className="section-title">{t.title}</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">{t.intro}</p>
            
            <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
              {t.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-[var(--secondary-color)] rounded-lg">
                <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center mb-4">
                  <div className="icon-award text-xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="font-bold text-xl mb-2">0 {t.yearsLabel}</h3>
                <p className="text-[var(--text-secondary)]">{t.experienceLabel}</p>
              </div>
              
              <div className="text-center p-6 bg-[var(--secondary-color)] rounded-lg">
                <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center mb-4">
                  <div className="icon-briefcase text-xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="font-bold text-xl mb-2">0 {t.projectsLabel}</h3>
                <p className="text-[var(--text-secondary)]">{t.completedLabel}</p>
              </div>
              
              <div className="text-center p-6 bg-[var(--secondary-color)] rounded-lg">
                <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center mb-4">
                  <div className="icon-users text-xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="font-bold text-xl mb-2">0 {t.clientsLabel}</h3>
                <p className="text-[var(--text-secondary)]">{t.satisfiedLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}