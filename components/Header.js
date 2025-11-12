function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [language, setLanguage] = React.useState(localStorage.getItem('language') || 'et');

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      } else {
        // If section doesn't exist on current page, navigate to index.html
        window.location.href = `index.html#${sectionId}`;
      }
    };

    const toggleLanguage = () => {
      const newLang = language === 'et' ? 'en' : 'et';
      setLanguage(newLang);
      localStorage.setItem('language', newLang);
      window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }));
    };

    const t = {
      et: {
        brand: 'Portfoolio',
        home: 'Avaleht',
        about: 'Minust',
        skills: 'Oskused',
        education: 'Haridus',
        contact: 'Kontakt'
      },
      en: {
        brand: 'Portfolio',
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        education: 'Education',
        contact: 'Contact'
      }
    };

    return (
      <header className="fixed top-0 w-full bg-white shadow-sm z-50" data-name="header" data-file="components/Header.js">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[var(--primary-color)]">{t[language].brand}</div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('home')} className="hover:text-[var(--primary-color)] transition-colors">{t[language].home}</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-[var(--primary-color)] transition-colors">{t[language].about}</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-[var(--primary-color)] transition-colors">{t[language].skills}</button>
              <a href="education.html" className="hover:text-[var(--primary-color)] transition-colors">{t[language].education}</a>
              <button onClick={() => scrollToSection('contact')} className="hover:text-[var(--primary-color)] transition-colors">{t[language].contact}</button>
              <button 
                onClick={toggleLanguage}
                className="px-3 py-1 rounded-md bg-[var(--primary-color)] text-white hover:opacity-90 transition-all text-sm font-medium"
              >
                {language === 'et' ? 'EN' : 'ET'}
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-2xl`}></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-[var(--primary-color)]">{t[language].home}</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-[var(--primary-color)]">{t[language].about}</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 hover:text-[var(--primary-color)]">{t[language].skills}</button>
              <a href="education.html" className="block w-full text-left py-2 hover:text-[var(--primary-color)]">{t[language].education}</a>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-[var(--primary-color)]">{t[language].contact}</button>
              <button 
                onClick={toggleLanguage}
                className="px-3 py-2 rounded-md bg-[var(--primary-color)] text-white hover:opacity-90 transition-all text-sm font-medium w-full text-left"
              >
                {language === 'et' ? 'Switch to English' : 'Lülitu eesti keelele'}
              </button>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}