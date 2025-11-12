function Hero() {
  try {
    const [language, setLanguage] = React.useState(localStorage.getItem('language') || 'et');

    React.useEffect(() => {
      const handleLanguageChange = (e) => {
        setLanguage(e.detail);
      };
      window.addEventListener('languageChange', handleLanguageChange);
      return () => window.removeEventListener('languageChange', handleLanguageChange);
    }, []);

    const t = translations[language].hero;

    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 pt-20" data-name="hero" data-file="components/Hero.js">
        <div style={{"paddingTop":"0px","paddingRight":"24px","paddingBottom":"0px","paddingLeft":"24px","marginTop":"0px","marginRight":"80px","marginBottom":"100px","marginLeft":"80px","fontSize":"16px","color":"rgb(17, 24, 39)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"center","fontWeight":"400","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white text-5xl font-bold mb-6">MG</div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t.greeting} <span className="text-gradient"> Mark Grintšin</span>
          </h1>
          
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl mx-auto italic">
            {t.beginnerNote}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="education.html" className="btn btn-primary">{t.education}</a>
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn btn-outline">
              {t.contact}
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}