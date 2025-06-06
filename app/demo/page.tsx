"use client";

import React from "react";
import HeroForm from "@/components/componentsDemo/landing/HeroForm";
import HeroImage from "@/components/componentsDemo/landing/HeroImage";
import WhyChooseUs from "@/components/componentsDemo/landing/WhyChooseUs";
import HistoriqueNav from "@/components/componentsDemo/landing/HistoriqueNav";
import RodmapResa from "@/components/componentsDemo/landing/RodmapResa";
import AccomodationTypes from "@/components/componentsDemo/landing/AccomodationTypes";
import DestinationTypes from "@/components/componentsDemo/landing/DestinationTypes";

export default function Home() {
  // Exemple d'objet hotel (non utilisé dans ce composant, mais vous pouvez l'utiliser plus tard)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-200 ">
      <div>
        <HeroImage />
      </div>

      {/* HeroForm Section */}
      <div className="max-w-7xl mx-auto ">
        <div className="text-center">
          <HeroForm />
        </div>
      </div>
      <div className="-mt-20">
        <WhyChooseUs />
      </div>
      <div>
        <HistoriqueNav />
      </div>
      <div>
        <div>
          <AccomodationTypes />
        </div>
        <div>
          <DestinationTypes />
        </div>
        <div>promo de la platfom devenait membre</div>
        <div>installer l'apli</div>
        <div>promo du moment</div>
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
      <div>
        <RodmapResa />{" "}
      </div>
    </div>
  );
}
