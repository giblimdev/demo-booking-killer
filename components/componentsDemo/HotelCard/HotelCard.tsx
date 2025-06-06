// components/componentsDemo/HotelCard/HotelCard.tsx
import React from "react";
import { Hotel } from "@/utils/getHotel";
import { Star, MapPin, Wifi, Car, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const discountAmount = hotel.regular_price
    ? parseFloat(hotel.regular_price) - parseFloat(hotel.base_price_per_night)
    : 0;

  const discountPercentage = hotel.regular_price
    ? Math.round(
        ((parseFloat(hotel.regular_price) -
          parseFloat(hotel.base_price_per_night)) /
          parseFloat(hotel.regular_price)) *
          100
      )
    : 0;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <CardContent className="p-0">
        <div className="flex h-64">
          {/* PARTIE GAUCHE - Image */}
          <div className="relative w-80 flex-shrink-0">
            <img
              src={hotel.main_image_url}
              alt={hotel.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = "/placeholder-hotel.png";
              }}
            />

            {/* Heart Icon */}
            <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm">
              <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 hover:fill-red-500 transition-colors" />
            </button>

            {/* Partner Badge */}
            {hotel.partener && (
              <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
                <Shield className="w-3 h-3 mr-1" />
                Partenaire
              </Badge>
            )}

            {/* Discount Badge */}
            {discountPercentage > 0 && (
              <Badge className="absolute bottom-3 left-3 bg-red-500 text-white">
                -{discountPercentage}%
              </Badge>
            )}

            {/* Message sur image */}
            {hotel.message_sur_image && (
              <Badge className="absolute bottom-3 right-3 bg-green-600 text-white text-xs">
                {hotel.message_sur_image}
              </Badge>
            )}
          </div>

          {/* PARTIE CENTRALE - Informations */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            {/* Hotel Group */}
            {hotel.hotel_group && (
              <p className="text-xs text-gray-500 mb-1 font-medium">
                {hotel.hotel_group}
              </p>
            )}

            {/* Hotel Name */}
            <h3 className="font-bold text-xl text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {hotel.name}
            </h3>

            {/* Stars and Label */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                {[...Array(hotel.star_rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600 font-medium">
                  {hotel.star_rating} étoile{hotel.star_rating > 1 ? "s" : ""}
                </span>
              </div>
              {hotel.Label && (
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-700"
                >
                  {hotel.Label}
                </Badge>
              )}
            </div>

            {/* Location */}
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="truncate">{hotel.neighborhood}</span>
              <span className="mx-2">•</span>
              <span className="whitespace-nowrap">{hotel.distance_centre}</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-3 line-clamp-3 leading-relaxed flex-1">
              {hotel.short_description}
            </p>

            {/* Highlights */}
            {hotel.hotel_highlights && (
              <p className="text-xs text-blue-600 mb-3 line-clamp-1">
                ✨ {hotel.hotel_highlights}
              </p>
            )}

            {/* Amenities Icons */}
            <div className="flex items-center space-x-3 mb-3">
              {hotel.Hotel_amenity.toLowerCase().includes("wifi") && (
                <div
                  className="flex items-center text-green-600"
                  title="WiFi gratuit"
                >
                  <Wifi className="w-4 h-4 mr-1" />
                  <span className="text-xs">WiFi</span>
                </div>
              )}
              {hotel.parking_options &&
                hotel.parking_options.toLowerCase().includes("parking") && (
                  <div
                    className="flex items-center text-green-600"
                    title="Parking disponible"
                  >
                    <Car className="w-4 h-4 mr-1" />
                    <span className="text-xs">Parking</span>
                  </div>
                )}
            </div>

            {/* Cancellation Policy */}
            {hotel.cancellation_policy.toLowerCase().includes("gratuite") && (
              <p className="text-xs text-green-600 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Annulation gratuite
              </p>
            )}
          </div>

          {/* PARTIE DROITE - Note, Prix et Bouton */}
          <div className="w-72 flex-shrink-0 p-6 bg-gray-50 flex flex-col justify-between">
            {/* Rating */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="bg-blue-600 text-white text-lg font-bold px-3 py-2 rounded shadow-sm">
                  {hotel.overall_rating}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-900">
                    {hotel.adjectif}
                  </p>
                  <p className="text-xs text-gray-500">
                    {hotel.nombres_avis} avis
                  </p>
                </div>
              </div>
            </div>

            {/* Promotional Message */}
            {hotel.message_promo && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <p className="text-xs text-green-700 font-medium">
                  🎉 {hotel.message_promo}
                </p>
              </div>
            )}

            {/* Pricing */}
            <div className="mb-6">
              {hotel.regular_price &&
                parseFloat(hotel.regular_price) >
                  parseFloat(hotel.base_price_per_night) && (
                  <p className="text-sm text-gray-500 line-through mb-1">
                    {hotel.regular_price}
                    {hotel.currency}
                  </p>
                )}
              <div className="flex items-baseline mb-1">
                <p className="text-2xl font-bold text-gray-900">
                  {hotel.base_price_per_night}
                  {hotel.currency}
                </p>
                <span className="text-sm font-normal text-gray-600 ml-1">
                  /nuit
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">Taxes incluses</p>

              {discountAmount > 0 && (
                <p className="text-sm text-green-600 font-semibold">
                  Économisez {Math.round(discountAmount)}
                  {hotel.currency}
                </p>
              )}
            </div>

            {/* Action Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-base">
              Voir les disponibilités
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
