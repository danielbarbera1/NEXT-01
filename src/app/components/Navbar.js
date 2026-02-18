// components/Navbar.jsx
import Link from 'next/link'

export default function Navbar () {
    return (
        <div className="w-full bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Logo/Texto izquierda */}
                    <div className="flex items-center space-x-8">
                        <Link href="/inicio" className="text-2xl font-bold bg-gradient-to-r from-black via-gray-500 to-white bg-clip-text text-transparent">
                            Next-01
                        </Link>

                        {/* Navegación Desktop */}
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href="/inicio" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
                                inicio
                            </Link>
                            <Link href="/servicio" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
                                servicio
                            </Link>
                            <Link href="/nosotros" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
                                nosotros
                            </Link>
                            <Link href="/contacto" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
                                contacto
                            </Link>
                        </nav>
                    </div>

                    {/* Elementos derecha */}
                    <div className="flex items-center space-x-4">
                        {/* Botón de búsqueda */}
                        <input 
                            placeholder="Buscar..." 
                            className="bg-gray-100 rounded px-3 py-1 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}