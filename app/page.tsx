"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique après 3 secondes
    const timer = setTimeout(() => {
      router.push("/com");
    }, 0);

    // Nettoyage du timer si le composant est démonté
    return () => clearTimeout(timer);
  }, [router]);

  const handleSkip = () => {
    router.push("/demo");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 flex items-center justify-center">
      <div className="text-center text-white px-4">
        {/* Logo/Titre */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">
            FastBooking
          </h1>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        {/* Message de bienvenue */}
        <div className="mb-8 animate-slide-up">
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            Bienvenue dans votre solution de gestion d'hébergements
          </h2>
          <p className="text-lg opacity-90 max-w-md mx-auto">
            Découvrez une expérience moderne et intuitive pour gérer vos
            réservations
          </p>
        </div>

        {/* Indicateur de chargement */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            <span className="text-sm">Chargement de la démonstration...</span>
          </div>
        </div>

        {/* Compteur visuel */}
        <div className="mt-8">
          <div className="w-48 h-1 bg-white bg-opacity-30 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-white rounded-full animate-progress"></div>
          </div>
          <p className="text-sm mt-2 opacity-75">
            Redirection automatique dans quelques secondes...
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }

        .animate-progress {
          animation: progress 3s linear;
        }
      `}</style>
    </div>
  );
}
