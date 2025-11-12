function Skills() {
  try {
    const [language, setLanguage] = React.useState(localStorage.getItem('language') || 'et');

    React.useEffect(() => {
      const handleLanguageChange = (e) => {
        setLanguage(e.detail);
      };
      window.addEventListener('languageChange', handleLanguageChange);
      return () => window.removeEventListener('languageChange', handleLanguageChange);
    }, []);

    const t = translations[language].skills;

    const skills = [
      { name: 'HTML/CSS(algaja)', level: 7, icon: 'code' },
      { name: 'JavaScript(väga algaja)', level: 7, icon: 'terminal' },
      { name: 'React(olen hästi vähe kokku puutunud)', level: 7, icon: 'blocks' },
      { name: 'UI/UX Design(natuke saan)', level: 7, icon: 'palette' },
      { name: 'Figma(olen seal ühe töö teinud)', level: 7, icon: 'pen-tool' },
      { name: 'Node.js(tegin oma õpi lehe külje sellega)', level: 7, icon: 'server' }
    ];

    return (
      <section id="skills" className="py-20 bg-white" data-name="skills" data-file="components/Skills.js">
        <div className="container mx-auto px-6">
          <h2 className="section-title">{t.title}</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={`skill-${index}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`icon-${skill.icon} text-[var(--primary-color)]`}></div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-[var(--text-secondary)]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[var(--primary-color)] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}