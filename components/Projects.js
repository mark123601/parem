function Projects() {
  try {
    const [language, setLanguage] = React.useState(localStorage.getItem('language') || 'et');

    React.useEffect(() => {
      const handleLanguageChange = (e) => {
        setLanguage(e.detail);
      };
      window.addEventListener('languageChange', handleLanguageChange);
      return () => window.removeEventListener('languageChange', handleLanguageChange);
    }, []);

    const t = translations[language].projects;
    const projects = t.items.map((item, index) => ({
      id: index + 1,
      title: item.title,
      description: item.description,
      image: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
      ][index],
      tags: item.tags
    }));

    return (
      <section id="projects" className="py-20 bg-[var(--secondary-color)]" data-name="projects" data-file="components/Projects.js">
        <div className="container mx-auto px-6">
          <h2 className="section-title">{t.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-[var(--primary-color)] text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}