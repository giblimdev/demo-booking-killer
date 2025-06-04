"use client";

import React from "react";
import HeroForm from "@/components/componentsDemo/dev/HeroForm";

export default function Home() {
  // Exemple d'objet hotel (non utilisé dans ce composant, mais vous pouvez l'utiliser plus tard)
  const hotelExample = {
    id: 1,
    name: "Hôtel Paradis",
    imageUrl: "/card2.png",
    description:
      "Un hôtel de luxe niché au cœur de la nature, offrant une vue imprenable sur les montagnes.",
    price: 300,
    rating: 5,
    city: "Chamonix",
    isProfessionalHost: true,
    breakfastIncluded: true,
    wifiIncluded: true,
    promotion:
      "Offre spéciale - 15% de réduction pour les réservations de plus de 3 nuits",
    priceDetails: "par nuit, petit déjeuner inclus",
    reviewScore: 4.8,
    reviewCount: 200,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-200 p-2">
      <div>
        <div>hero avec image de fond</div>
        <div>hero form</div>
        <div>whychooseus</div>
        <div>historique de nav</div>
        <div>type de destination </div>
        <div>promo de la platfom devenait membre</div>
        <div>installer l'apli</div>
        <div>promo du moment</div>
      </div>
      {/* HeroForm Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="text-center">
          <HeroForm />
        </div>
      </div>

      {/* Hero Section with Background Image and Slogan */}
      <div className="relative h-[400px] bg-cover bg-center mt-6">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: `url(\hero.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Noir avec 40% d'opacité
          }}
        >
          <div className="text-center text-blue-900">
            <h1 className="text-5xl font-bold mb-4">{"heroSlogan"}</h1>
            <p className="text-xl">{"heroSubSlogan"}</p>
          </div>
        </div>
      </div>

      {/* Accommodation Types Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {"accommodationTypes"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Hôtels</h3>
            <p className="text-gray-600">{"hotelsDescription"}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Appartements
            </h3>
            <p className="text-gray-600">{"apartmentsDescription"}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Villas</h3>
            <p className="text-gray-600">{"villasDescription"}</p>
          </div>
        </div>
      </div>

      {/* Popular Destinations Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {"popularDestinations"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Paris</h3>
            <p className="text-gray-600">{"parisDescription"}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              New York
            </h3>
            <p className="text-gray-600">{"newYorkDescription"}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Tokyo</h3>
            <p className="text-gray-600">{"tokyoDescription"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
