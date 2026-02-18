
'use client'
export default function Pages() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Principal */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto px-6 py-24 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Contenido izquierdo */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 Lanzamiento 2024
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transforma tu <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  negocio digital
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                La plataforma todo-en-uno que necesitas para llevar tu negocio al siguiente nivel. 
                Automatiza, optimiza y crece con nosotros.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group relative px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl 
                                 hover:bg-indigo-700 transform hover:scale-105 transition-all 
                                 duration-300 shadow-xl hover:shadow-2xl overflow-hidden">
                  <span className="relative z-10">Comenzar gratis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold 
                                 rounded-xl hover:bg-indigo-50 transform hover:scale-105 
                                 transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ver demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-gray-900">+10K</div>
                  <div className="text-gray-600">Usuarios activos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">+50K</div>
                  <div className="text-gray-600">Proyectos completados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-gray-600">Satisfacción</div>
                </div>
              </div>
            </div>
            
            {/* Imagen/Dashboard derecha */}
            <div className="flex-1 relative">
              <div className="relative">
                {/* Imagen principal */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          <div className="h-16 bg-indigo-100 rounded-lg"></div>
                          <div className="h-16 bg-indigo-100 rounded-lg"></div>
                          <div className="h-16 bg-indigo-100 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Badge flotante */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-bounce">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold">+500 nuevos usuarios</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
              Características
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="text-xl text-gray-600">
              Diseñado para ayudarte a crecer y optimizar tus procesos de manera eficiente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                          border border-gray-100 hover:border-indigo-200">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 
                            group-hover:bg-indigo-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Rápido y eficiente</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimizado para máxima velocidad con tecnologías de última generación.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                          border border-gray-100 hover:border-indigo-200">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 
                            group-hover:bg-indigo-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Seguridad garantizada</h3>
              <p className="text-gray-600 leading-relaxed">
                Tus datos protegidos con los más altos estándares de seguridad.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                          border border-gray-100 hover:border-indigo-200">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 
                            group-hover:bg-indigo-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Trabajo colaborativo</h3>
              <p className="text-gray-600 leading-relaxed">
                Equipos trabajando juntos en tiempo real desde cualquier lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de testimonios */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
              Testimonios
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600">
              Miles de empresas confían en nosotros para su crecimiento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Esta plataforma transformó completamente la manera en que trabajamos. Incrementamos nuestra productividad en un 200%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">María González</h4>
                  <p className="text-gray-600 text-sm">CEO, TechStart</p>
                </div>
              </div>
            </div>
            
            {/* Testimonio 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "La mejor inversión que hemos hecho. El soporte es increíble y las funcionalidades son exactamente lo que necesitábamos."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Carlos Rodríguez</h4>
                  <p className="text-gray-600 text-sm">Director, InnovateCorp</p>
                </div>
              </div>
            </div>
            
            {/* Testimonio 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "La facilidad de uso y la interfaz intuitiva hicieron que la adopción en nuestra empresa fuera inmediata."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Ana Martínez</h4>
                  <p className="text-gray-600 text-sm">Gerente, DigitalSolutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            <h2 className="text-4xl font-bold text-white mb-4 relative z-10">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto relative z-10">
              Únete a miles de empresas que ya están transformando su negocio con nosotros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl 
                               hover:bg-gray-100 transform hover:scale-105 transition-all 
                               duration-300 shadow-xl">
                Prueba gratis 14 días
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold 
                               rounded-xl hover:bg-white/10 transform hover:scale-105 
                               transition-all duration-300">
                Contactar ventas
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Estilos para animaciones personalizadas */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}