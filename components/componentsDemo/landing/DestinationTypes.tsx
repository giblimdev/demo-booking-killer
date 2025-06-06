import React from "react";
import stayTypes from "@/lib/data/destination";
import {
  Umbrella,
  MountainSnow,
  TreeDeciduous,
  Building2,
  ShoppingBag,
  Landmark,
  Palette,
  BriefcaseBusiness,
  Dumbbell,
  HeartPulse,
  Users,
} from "lucide-react";

const iconMap = {
  Umbrella,
  MountainSnow,
  TreeDeciduous,
  Building2,
  ShoppingBag,
  Landmark,
  Palette,
  BriefcaseBusiness,
  Dumbbell,
  HeartPulse,
  Users,
};

export default function DestinationTypes() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Types de destinations
      </h2>
      <div className="flex overflow-x-auto gap-6 px-2 scrollbar-thin scrollbar-thumb-blue-200">
        {stayTypes
          .sort((a, b) => a.order - b.order)
          .map((type) => {
            const LucideIcon = iconMap[type.icon as keyof typeof iconMap];
            return (
              <div
                key={type.label}
                className="min-w-[220px] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 mb-3 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={type.image}
                    alt={type.label}
                    className="object-cover w-full h-full"
                  />
                </div>
                {LucideIcon && (
                  <LucideIcon className="w-7 h-7 text-blue-600 mb-2" />
                )}
                <span className="font-semibold text-lg text-gray-800">
                  {type.label}
                </span>
              </div>
            );
          })}
      </div>
    </section>
  );
}
