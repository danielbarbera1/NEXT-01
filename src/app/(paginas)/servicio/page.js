'use client'
export default function Pages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Contenido izquierdo */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Bienvenido a 
              <span className="text-indigo-600"> MiApp</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              La mejor plataforma para gestionar tus proyectos y aumentar tu productividad. 
              Diseñada pensando en tus necesidades.
            </p>
            
            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg 
                               hover:bg-indigo-700 transform hover:scale-105 transition-all 
                               duration-300 shadow-lg hover:shadow-xl">
                Comenzar ahora
              </button>
              <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 
                               font-semibold rounded-lg hover:bg-indigo-50 
                               transform hover:scale-105 transition-all duration-300">
                Ver más
              </button>
            </div>
          </div>
          
          {/* Imagen/Ilustración derecha */}
          <div className="flex-1">
            <div className="bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl p-8 
                          shadow-2xl transform hover:rotate-1 transition-transform duration-300">
              <div className="bg-white rounded-xl p-6 shadow-inner">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="h-20 bg-indigo-100 rounded-lg"></div>
                    <div className="h-20 bg-indigo-100 rounded-lg"></div>
                    <div className="h-20 bg-indigo-100 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            ¿Por qué elegirnos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Característica 1 */}
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Rápido</h3>
              <p className="text-gray-600">
                Optimizado para máxima velocidad y rendimiento en todas las operaciones.
              </p>
            </div>
            
            {/* Característica 2 */}
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Seguro</h3>
              <p className="text-gray-600">
                Tus datos están protegidos con los más altos estándares de seguridad.
              </p>
            </div>
            
            {/* Característica 3 */}
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Colaborativo</h3>
              <p className="text-gray-600">
                Trabaja en equipo de manera eficiente y en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}