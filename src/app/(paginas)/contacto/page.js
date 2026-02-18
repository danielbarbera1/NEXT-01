'use client'
export default function Pages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section - Contacto */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contáctanos
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos a la mayor brevedad posible.
          </p>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Formulario de Contacto */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Envíanos un mensaje
            </h2>
            
            <form className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nombre completo
                </label>
                <input 
                  type="text" 
                  placeholder="Ingresa tu nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-indigo-500 focus:border-indigo-500 transition-all
                           outline-none"
                />
              </div>
              
              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Correo electrónico
                </label>
                <input 
                  type="email" 
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-indigo-500 focus:border-indigo-500 transition-all
                           outline-none"
                />
              </div>
              
              {/* Teléfono */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Teléfono (opcional)
                </label>
                <input 
                  type="tel" 
                  placeholder="+52 123 456 7890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-indigo-500 focus:border-indigo-500 transition-all
                           outline-none"
                />
              </div>
              
              {/* Asunto */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Asunto
                </label>
                <input 
                  type="text" 
                  placeholder="¿Sobre qué quieres hablar?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-indigo-500 focus:border-indigo-500 transition-all
                           outline-none"
                />
              </div>
              
              {/* Mensaje */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mensaje
                </label>
                <textarea 
                  rows="5"
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-indigo-500 focus:border-indigo-500 transition-all
                           outline-none resize-none"
                ></textarea>
              </div>
              
              {/* Botón enviar */}
              <button 
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 
                         rounded-lg hover:bg-indigo-700 transform hover:scale-[1.02] 
                         transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
          
          {/* Información de Contacto */}
          <div className="lg:w-96">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Información de contacto
              </h2>
              
              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Dirección</h3>
                    <p className="text-gray-600 mt-1">
                      Av. Principal #123<br />
                      Ciudad, CP 12345<br />
                      País
                    </p>
                  </div>
                </div>
                
                {/* Teléfono */}
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Teléfono</h3>
                    <p className="text-gray-600 mt-1">
                      +52 123 456 7890<br />
                      +52 987 654 3210
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600 mt-1">
                      info@miapp.com<br />
                      soporte@miapp.com
                    </p>
                  </div>
                </div>
                
                {/* Horario */}
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Horario</h3>
                    <p className="text-gray-600 mt-1">
                      Lunes a Viernes: 9am - 6pm<br />
                      Sábados: 10am - 2pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Redes Sociales */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Síguenos
              </h2>
              
              <div className="flex justify-center space-x-4">
                <a href="#" className="bg-indigo-100 p-4 rounded-full hover:bg-indigo-200 
                                      transition-colors duration-300 group">
                  <svg className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" 
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a href="#" className="bg-indigo-100 p-4 rounded-full hover:bg-indigo-200 
                                      transition-colors duration-300 group">
                  <svg className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" 
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.43-12.255c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a href="#" className="bg-indigo-100 p-4 rounded-full hover:bg-indigo-200 
                                      transition-colors duration-300 group">
                  <svg className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" 
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-gray-200 h-96 relative">
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p className="text-gray-600 text-lg">Mapa de ubicación</p>
            <p className="text-gray-500">Av. Principal #123, Ciudad</p>
          </div>
        </div>
      </section>
    </div>
  );
}