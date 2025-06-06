// app/finedHotel/layout.tsx
import React from "react";
import FilterSidebar from "@/components/componentsDemo/FilterSidebar"; // Ajustez le chemin selon votre structure

interface FinedHotelLayoutProps {
  children: React.ReactNode;
}

export default function FinedHotelLayout({ children }: FinedHotelLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Section Search - 1/5 sur grand écran, pleine largeur sur mobile */}
        <aside className="w-full md:w-1/5 bg-white border-r border-gray-200 md:min-h-screen">
          <div className="p-4">
            <FilterSidebar />
          </div>
        </aside>

        {/* Section Children - 4/5 sur grand écran, pleine largeur sur mobile */}
        <main className="flex-1 md:w-4/5">
          <div className="p-4 md:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
