function Footer() {
  try {
    return (
      <footer className="bg-gray-900 text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Portfoolio</h3>
              <p className="text-gray-400">
                Loon ilusaid ja funktsionaalseid digitaalseid kogemusi.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Kiirlingid</h3>
              <ul className="space-y-2">
                <li><button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">Avaleht</button></li>
                <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">Minust</button></li>
                <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">Kontakt</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Ühenda</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-github text-xl"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-linkedin text-xl"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-twitter text-xl"></div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Portfoolio. Kõik õigused kaitstud.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}