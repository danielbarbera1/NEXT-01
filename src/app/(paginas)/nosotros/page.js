'use client'
export default function Pages() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Nosotros */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        
        <div className="container mx-auto px-6 py-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Conoce nuestro <span className="text-yellow-300">equipo</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Somos un grupo apasionado por la tecnología y la innovación, dedicados a crear 
              soluciones que transforman la manera en que las empresas trabajan y crecen.
            </p>
            
            {/* Stats rápidas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-white">+5</div>
                <div className="text-indigo-200">Años de experiencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">+50</div>
                <div className="text-indigo-200">Profesionales</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">+200</div>
                <div className="text-indigo-200">Clientes felices</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">+15</div>
                <div className="text-indigo-200">Países</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Historia */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Timeline/Historia */}
            <div className="flex-1">
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
                Nuestra historia
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
                De un sueño a una realidad
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Todo comenzó en 2019, cuando un grupo de amigos apasionados por la tecnología 
                decidió crear una solución que ayudara a las pequeñas empresas a digitalizarse 
                de manera sencilla y efectiva.
              </p>
              
              {/* Timeline */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                    <div className="w-0.5 h-16 bg-indigo-200"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="font-bold text-gray-900 text-lg">2019 - El inicio</h3>
                    <p className="text-gray-600">Fundamos la empresa con la misión de democratizar la tecnología para negocios locales.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                    <div className="w-0.5 h-16 bg-indigo-200"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="font-bold text-gray-900 text-lg">2021 - Expansión</h3>
                    <p className="text-gray-600">Llegamos a más de 100 clientes y expandimos nuestro equipo a 20 personas.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                    <div className="w-0.5 h-16 bg-indigo-200"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="font-bold text-gray-900 text-lg">2023 - Internacionalización</h3>
                    <p className="text-gray-600">Comenzamos a operar en 15 países y alcanzamos los 50 profesionales.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">2024 - Presente</h3>
                    <p className="text-gray-600">Seguimos innovando y creciendo para ofrecer las mejores soluciones.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Imagen/Video ilustrativo */}
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 rounded-lg -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-lg -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Equipo trabajando" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">+50 profesionales</div>
                      <div className="text-sm text-gray-600">Trabajando para ti</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Misión y Visión */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
              Filosofía
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Nuestra razón de ser
            </h2>
            <p className="text-xl text-gray-600">
              Lo que nos mueve cada día a dar lo mejor de nosotros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
              <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 
                            group-hover:bg-indigo-600 transition-colors duration-300">
                <svg className="w-10 h-10 text-indigo-600 group-hover:text-white transition-colors duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Democratizar el acceso a la tecnología de punta, permitiendo que empresas de todos 
                los tamaños puedan competir en igualdad de condiciones en el mercado digital. 
                Nos esforzamos por crear soluciones intuitivas que resuelvan problemas reales.
              </p>
              <div className="mt-6 flex items-center gap-2 text-indigo-600 font-semibold">
                <span>Más sobre nuestro propósito</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Visión */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 
                            group-hover:bg-purple-600 transition-colors duration-300">
                <svg className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ser reconocidos como el aliado tecnológico preferido por las empresas 
                latinoamericanas para su transformación digital. Aspiramos a expandir nuestro 
                impacto a nivel global, manteniendo siempre la calidad y cercanía que nos caracteriza.
              </p>
              <div className="mt-6 flex items-center gap-2 text-purple-600 font-semibold">
                <span>Nuestros objetivos a futuro</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Valores */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
              Valores
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Lo que nos define
            </h2>
            <p className="text-xl text-gray-600">
              Principios que guían cada decisión que tomamos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Valor 1 */}
            <div className="p-8 border border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integridad</h3>
              <p className="text-gray-600">
                Actuamos con honestidad y transparencia en cada interacción con clientes y colaboradores.
              </p>
            </div>
            
            {/* Valor 2 */}
            <div className="p-8 border border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovación</h3>
              <p className="text-gray-600">
                Buscamos constantemente nuevas formas de mejorar y ofrecer soluciones creativas.
              </p>
            </div>
            
            {/* Valor 3 */}
            <div className="p-8 border border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trabajo en equipo</h3>
              <p className="text-gray-600">
                Creemos que juntos podemos lograr resultados extraordinarios.
              </p>
            </div>
            
            {/* Valor 4 */}
            <div className="p-8 border border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compromiso global</h3>
              <p className="text-gray-600">
                Pensamos en el impacto de nuestras acciones a nivel local y global.
              </p>
            </div>
            
            {/* Valor 5 */}
            <div className="p-8 border border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excelencia</h3>
              <p className="text-gray-600">
                Buscamos la máxima calidad en todo lo que hacemos.
              </p>
            </div>
            
            {/* Valor 6 */}
            <div className="p-8 border border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pasión</h3>
              <p className="text-gray-600">
                Amamos lo que hacemos y eso se refleja en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Equipo */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
              Talento humano
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Conoce a nuestro equipo
            </h2>
            <p className="text-xl text-gray-600">
              Profesionales apasionados listos para ayudarte a alcanzar tus metas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Miembro 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-r from-indigo-500 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Ana García</h3>
                  <p className="text-indigo-100">CEO & Fundadora</p>
                </div>
              </div>
              <div className="p-4 flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Miembro 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Carlos López</h3>
                  <p className="text-indigo-100">CTO</p>
                </div>
              </div>
              <div className="p-4 flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Miembro 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-r from-blue-500 to-indigo-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">María Rodríguez</h3>
                  <p className="text-indigo-100">Directora de Producto</p>
                </div>
              </div>
              <div className="p-4 flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Miembro 4 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-r from-green-500 to-teal-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Javier Martínez</h3>
                  <p className="text-indigo-100">Director de Marketing</p>
                </div>
              </div>
              <div className="p-4 flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Botón para ver más */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl 
                             hover:bg-indigo-700 transform hover:scale-105 transition-all 
                             duration-300 shadow-lg inline-flex items-center gap-2">
              <span>Conoce a todo el equipo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Sección de CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            <h2 className="text-4xl font-bold text-white mb-4 relative z-10">
              ¿Quieres ser parte de nuestro equipo?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto relative z-10">
              Estamos siempre en búsqueda de talento apasionado por la tecnología y la innovación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl 
                               hover:bg-gray-100 transform hover:scale-105 transition-all 
                               duration-300 shadow-xl">
                Ver vacantes disponibles
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold 
                               rounded-xl hover:bg-white/10 transform hover:scale-105 
                               transition-all duration-300">
                Enviar CV espontáneo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}