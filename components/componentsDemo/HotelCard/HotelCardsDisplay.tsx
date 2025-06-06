// components/HotelCardsDisplay.tsx
"use client";
import React, { useState, useMemo } from "react";
import {
  getAllHotels,
  getPartnerHotels,
  sortHotelsByRatingDesc,
  sortHotelsByPriceAsc,
  Hotel,
} from "@/utils/getHotel";
import CardHotel from "@/components/componentsDemo/HotelCard/HotelCard";

export default function HotelCardsDisplay() {
  const [sortBy, setSortBy] = useState<"rating" | "price" | "name">("rating");
  const [showOnlyPartners, setShowOnlyPartners] = useState(false);

  const hotels = useMemo(() => {
    let baseHotels: Hotel[] = showOnlyPartners
      ? getPartnerHotels()
      : getAllHotels();

    switch (sortBy) {
      case "rating":
        return sortHotelsByRatingDesc(baseHotels);
      case "price":
        return sortHotelsByPriceAsc(baseHotels);
      case "name":
        return [...baseHotels].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return baseHotels;
    }
  }, [sortBy, showOnlyPartners]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Hôtels à Marseille
        </h1>
        <p className="text-gray-600">
          Découvrez notre sélection d'hôtels à Marseille
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700">
            Trier par:
          </label>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "rating" | "price" | "name")
            }
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="rating">Note</option>
            <option value="price">Prix</option>
            <option value="name">Nom</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="partners"
            checked={showOnlyPartners}
            onChange={(e) => setShowOnlyPartners(e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="partners" className="text-sm text-gray-700">
            Partenaires uniquement
          </label>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          {hotels.length} hôtel{hotels.length > 1 ? "s" : ""} trouvé
          {hotels.length > 1 ? "s" : ""}
          {showOnlyPartners && " (partenaires)"}
        </p>
      </div>

      {/* Hotels Grid */}
      <div className="space-y-6">
        {hotels.map((hotel) => (
          <CardHotel key={hotel.id} hotel={hotel} />
        ))}
      </div>

      {/* Empty State */}
      {hotels.length === 0 && (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Aucun hôtel trouvé
            </h3>
            <p className="text-gray-500">
              Essayez de modifier vos filtres pour voir plus de résultats.
            </p>
          </div>
        </div>
      )}

      {/* Load More Button (optionnel) */}
      {hotels.length > 0 && (
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
            Voir plus d'hôtels
          </button>
        </div>
      )}
    </div>
  );
}

/*
ce composant dois afficher les cards d'hotel.
cree un script utils/getHotel.ts qui va utilisé lib/data/dataCarHotel.ts (as tu be soins que je  te donnes le script de lib/data/dataCarHotel.ts? )
ce composant doit utiliser le composant CardHotel.tsx (maquette d'une carde)
*/
