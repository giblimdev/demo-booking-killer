import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FastBooking - Gestion d'hébergements",
  description:
    "Solution complète pour la gestion et la réservation d'hébergements",
  keywords: "réservation, hébergement, gestion, booking, hôtel",
};

export default function ComLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/com" className="text-2xl font-bold text-indigo-600">
                FastBooking
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/com"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Accueil
                </Link>
                <Link
                  href="/com/features"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Fonctionnalités
                </Link>
                <Link
                  href="/com/about"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  À propos
                </Link>
                <Link
                  href="/demo"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  Voir la démo
                </Link>
              </div>
            </div>

            {/* Menu mobile */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-indigo-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">FastBooking</h3>
              <p className="text-gray-300 mb-4">
                Solution moderne et intuitive pour la gestion complète de vos
                hébergements et réservations.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/demo"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  Essayer la démo
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/com" className="text-gray-300 hover:text-white">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/com/features"
                    className="text-gray-300 hover:text-white"
                  >
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link
                    href="/com/about"
                    className="text-gray-300 hover:text-white"
                  >
                    À propos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>contact@fastbooking.com</li>
                <li>+33 1 23 45 67 89</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 FastBooking. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
