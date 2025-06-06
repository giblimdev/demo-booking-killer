import React from "react";
import { MapPin, Building, Star, Car, Bed, Shield } from "lucide-react";
import TableHotelCard from "@/components/componentsDemo/HotelCard/TableHotelCard";

export default function FiltersPage() {
  const filterSections = [
    {
      title: "Localisation",
      icon: <MapPin className="w-5 h-5" />,
      categories: [
        {
          name: "Pays",
          items: ["France", "Espagne", "Italie", "Allemagne", "Portugal"],
        },
        {
          name: "Ville",
          items: ["Paris", "Madrid", "Rome", "Berlin", "Lisbonne"],
        },
        {
          name: "Destinations",
          items: [
            "Beach",
            "Mountain",
            "Countryside",
            "Urban",
            "Shopping",
            "Historic",
            "Cultural",
            "Business",
            "Fitness",
            "Wellness",
            "Family",
          ],
        },
      ],
    },
    {
      title: "Équipements et Services",
      icon: <Building className="w-5 h-5" />,
      categories: [
        {
          name: "Équipements de la chambre",
          items: [
            "Shared bathroom",
            "Shared toilet",
            "Air conditioning",
            "WiFi included",
            "Ensuite bathroom",
            "Jacuzzi",
            "Bathtub",
            "Shower",
            "Toilet",
            "Balcony",
            "Minibar",
            "Refrigerator",
            "Kettle",
            "Coffee maker",
            "Television",
            "TV with streaming service",
            "Safe",
            "Iron and ironing board",
            "Hair dryer",
            "Free toiletries",
            "Robes and slippers",
            "Desk",
            "Kitchen",
            "Laundry facilities",
            "Washing machine",
            "Baby cot available",
          ],
        },
        {
          name: "Services de l'hôtel",
          items: [
            "Bar",
            "Restaurant",
            "Casino",
            "Spa / massage",
            "Gym",
            "Business center",
            "Boutique",
            "Pool",
            "Water park",
            "Golf",
            "Concierge service",
            "Room service",
            "Currency exchange",
            "Wake-up service",
            "Laundry service",
            "24/7 reception",
            "Self check-in",
            "Bike rental",
            "Scooter rental",
            "Car rental",
            "Shuttle service",
            "Pets allowed",
            "Smoking area",
          ],
        },
        {
          name: "Options d'accessibilité",
          items: [
            "Elevator",
            "Assistance animals allowed",
            "Step-free path",
            "Wheelchair-accessible shower",
            "Wheelchair-accessible parking",
          ],
        },
        {
          name: "Caractéristiques de l'hôtel",
          items: [
            "Remarkable view",
            "Prime location",
            "Vibrant nightlife",
            "Romantic atmosphere",
            "Quiet and relaxing",
          ],
        },
      ],
    },
    {
      title: "Autres Options",
      icon: <Star className="w-5 h-5" />,
      categories: [
        {
          name: "Options de parking",
          items: [
            "Secure parking",
            "Covered parking",
            "Free parking",
            "Paid parking",
            "Electric vehicle charging station",
          ],
        },
        {
          name: "Types de lits",
          items: [
            "1 king size bed",
            "1 double bed",
            "1 single bed",
            "2 single beds",
            "3 beds and more",
          ],
        },
        {
          name: "Labels",
          items: [
            "Eco-friendly",
            "Family-friendly",
            "Business-friendly",
            "Pet-friendly",
          ],
        },
        {
          name: "Types d'hébergement",
          items: [
            "Hotel",
            "Villa",
            "Historic hotel",
            "Design hotel",
            "Boutique hotel",
            "Serviced apartment",
            "Condominium",
            "Apartment",
            "Guest house",
            "Youth hostel",
            "Houseboat",
            "Private vacation home",
            "Chalet",
            "Camping",
            "Bungalow",
            "Cottage",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Filtres de Recherche
          </h1>
          <p className="text-lg text-gray-600">
            Explorez toutes les options disponibles pour personnaliser votre
            recherche
          </p>
        </div>

        {/* Filter Sections */}
        <div className="space-y-12">
          {filterSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {/* Section Header */}
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {section.categories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-4">
                    {/* Category Title */}
                    <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                      {category.name}
                    </h3>

                    {/* Items Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            id={`${sectionIndex}-${categoryIndex}-${itemIndex}`}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <label
                            htmlFor={`${sectionIndex}-${categoryIndex}-${itemIndex}`}
                            className="ml-3 text-sm font-medium text-gray-700 cursor-pointer"
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <TableHotelCard />
        </div>
      </div>
    </div>
  );
}
