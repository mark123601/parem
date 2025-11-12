function Contact() {
  try {
    const [language, setLanguage] = React.useState(localStorage.getItem('language') || 'et');
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: ''
    });
    const [submitStatus, setSubmitStatus] = React.useState('');

    React.useEffect(() => {
      const handleLanguageChange = (e) => {
        setLanguage(e.detail);
      };
      window.addEventListener('languageChange', handleLanguageChange);
      return () => window.removeEventListener('languageChange', handleLanguageChange);
    }, []);

    const t = translations[language].contact;

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitStatus(t.successMessage);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 5000);
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <section id="contact" className="py-20 bg-[var(--secondary-color)]" data-name="contact" data-file="components/Contact.js">
        <div className="container mx-auto px-6">
          <h2 className="section-title">{t.title}</h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-[var(--text-secondary)] mb-8">
              {t.intro}
            </p>
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">{t.nameLabel}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
                  placeholder={t.namePlaceholder}
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">{t.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
                  placeholder={t.emailPlaceholder}
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">{t.messageLabel}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
                  placeholder={t.messagePlaceholder}
                ></textarea>
              </div>
              
              <button type="submit" className="w-full btn btn-primary">
                {t.sendButton}
              </button>
              
              {submitStatus && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}