function EducationContent() {
  try {
    const education = [
      {
        id: 1,
        degree: 'Kutseõpe',
        school: 'Rakvere Ametikool',
        location: 'Rakvere, Eesti',
        period: '2025 - Praegu',
        description: 'Alustasin õpinguid Rakvere Ametikoolis.',
        achievements: ['Õpingud käimas']
      },
      {
        id: 2,
        degree: 'Põhiharidus',
        school: 'Rakvere Reaalkool',
        location: 'Rakvere, Eesti',
        period: '2016 - 2025',
        description: 'Lõpetasin Rakvere Reaalkooli põhiharidus, Väga head hinned olid.',
        achievements: ['Põhiharidus omandatud']
      }
    ];

    return (
      <div className="pt-20" data-name="education-content" data-file="components/EducationContent.js">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-center mb-6">Haridus</h1>
            <p className="text-xl text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              Minu akadeemiline teekond ja haridustagatised
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              {education.map((edu, index) => (
                <div key={edu.id} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <div className="icon-graduation-cap text-2xl text-[var(--primary-color)]"></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">{edu.degree}</h3>
                        <span className="text-[var(--primary-color)] font-medium">{edu.period}</span>
                      </div>
                      
                      <h4 className="text-xl text-[var(--text-secondary)] mb-1">{edu.school}</h4>
                      <div className="text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                        <div className="icon-map-pin text-sm"></div>
                        <span>{edu.location}</span>
                      </div>
                      
                      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-50 text-[var(--primary-color)] text-sm rounded-full">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('EducationContent component error:', error);
    return null;
  }
}