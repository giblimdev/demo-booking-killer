"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import HeaderNav from "@/components/header/headerNav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header className="relative z-2000">
      <div className="p-4 bg-white shadow-md flex items-center">
        <button onClick={() => setOpen(true)} className="text-gray-700 hover:text-blue-600">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="ml-4 text-xl font-bold text-blue-600">TravelEthic</h1>
      </div>

      {open && (
        <div
          ref={menuRef}
          className="absolute left-0 top-16 w-72 bg-white border-r border-gray-200 shadow-lg h-[90vh] overflow-y-auto"
        >
          {/* Réutilisation de ton composant */}
          <HeaderNav onLinkClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}
