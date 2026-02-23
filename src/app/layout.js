import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Next-01",
  description: "Practica de Nextjs-01",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        <Navbar />

        <main className="container">
          {children}
        </main>

        <Footer/>

      </body>
    </html>
  );
}
