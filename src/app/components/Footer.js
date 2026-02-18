import Link from 'next/link';

// components/Footer.jsx
export default function Footer() {
    return (
        <footer className="bg-linear-to-b from-gray-900 to-black pt-12 pb-6 px-4">
            <div className="container mx-auto max-w-6xl">

                {/* ============================================ */}
                {/* SECCIÓN 1: ENLACES DEL SITIO - 3 COLUMNAS */}
                {/* ============================================ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

                    {/* COLUMNA 1: Navegación */}
                    <div className="text-center md:text-left">
                        <h6 className="text-lg font-bold mb-4 text-white flex items-center justify-center md:justify-start gap-2">
                            <span className="bg-red-500 w-2 h-5 rounded-full"></span>
                            Navegación
                        </h6>
                        <div className="space-y-3 text-white grid">
                            <Link href="/inicio">Inicio</Link>
                            <Link href="/servicio">Servicio</Link>
                            <Link href="/nosotros">Nosotros</Link>
                            <Link href="/contacto">Contacto</Link>
                        </div>
                    </div>

                    {/* COLUMNA 2: Servicios */}
                    <div className="text-center md:text-left">
                        <h6 className="text-lg font-bold mb-4 text-white flex items-center justify-center md:justify-start gap-2">
                            <span className="bg-blue-500 w-2 h-5 rounded-full"></span>
                            Servicios
                        </h6>
                        <div className="space-y-3 text-white grid">
                            <Link href="/servicio#web">Desarrollo Web</Link>
                            <Link href="/servicio#app">Aplicaciones</Link>
                            <Link href="/servicio#consultoria">Consultoría</Link>
                            <Link href="/servicio#soporte">Soporte Técnico</Link>
                        </div>
                    </div>

                    {/* COLUMNA 3: Contacto */}
                    <div className="text-center md:text-left">
                        <h6 className="text-lg font-bold mb-4 text-white flex items-center justify-center md:justify-start gap-2">
                            <span className="bg-yellow-500 w-2 h-5 rounded-full"></span>
                            Contacto
                        </h6>
                        <div className="space-y-3">
                            <p className="text-gray-400">📧 info@next-01.com</p>
                            <p className="text-gray-400">📱 +34 123 456 789</p>
                            <p className="text-gray-400">📍 Madrid, España</p>
                            <Link href="/contacto" className='text-white'>Formulario de contacto</Link>
                        </div>
                    </div>

                </div>

                {/* ============================================ */}
                {/* SECCIÓN 2: SEPARADOR */}
                {/* ============================================ */}
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-800"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="px-4 bg-linear-to-b from-gray-900 to-black">
                            <span className="text-gray-500 text-sm">Next-01</span>
                        </div>
                    </div>
                </div>

                {/* ============================================ */}
                {/* SECCIÓN 3: PIE INFERIOR - MARCA Y SOCIAL */}
                {/* ============================================ */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Logo y Copyright */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                            <span className="text-2xl font-bold bg-linear-to-r from-black via-gray-500 to-white bg-clip-text text-transparent">
                                Next-01
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Next-01. Todos los derechos reservados.
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                            Desarrollado con Next.js y Tailwind CSS
                        </p>
                    </div>

                    {/* Redes Sociales */}
                    <div className="flex gap-3">
                        {/* GitHub */}
                        <a href="#" className="bg-gray-700 hover:bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs transition-colors">
                            G
                        </a>

                        {/* Twitter */}
                        <a href="#" className="bg-sky-500 hover:bg-sky-600 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs transition-colors">
                            T
                        </a>

                        {/* LinkedIn */}
                        <a href="#" className="bg-blue-700 hover:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs transition-colors">
                            L
                        </a>
                    </div>

                </div>

                {/* ============================================ */}
                {/* SECCIÓN 4: ENLACES LEGALES */}
                {/* ============================================ */}
                <div className="mt-8 pt-6 border-t border-gray-800">

                    {/* Enlaces legales */}
                    <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-600 text-sm">
                        <Link href="/privacidad">Política de Privacidad</Link>
                        <span className="text-gray-700">•</span>
                        <Link href="/terminos">Términos de Uso</Link>
                        <span className="text-gray-700">•</span>
                        <Link href="/cookies">Política de Cookies</Link>
                    </div>

                    {/* Versión */}
                    <p className="text-center text-gray-700 text-xs mt-4">
                        v1.0.0 - {new Date().getFullYear()}
                    </p>
                </div>

            </div>
        </footer>
    );
}