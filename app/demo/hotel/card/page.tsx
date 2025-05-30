// pages/index.tsx
import React from "react";
import Image from "next/image";
import { Stint_Ultra_Expanded } from "next/font/google";

const stintUltraExpanded = Stint_Ultra_Expanded({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-stint-ultra-expanded",
});

const images = [
  { src: "/vagoda.png", alt: "Expedia", width: 600, height: 100 },
  { src: "/vairbnb.png", alt: "Expedia", width: 600, height: 100 },
  { src: "/vbing.png", alt: "Expedia", width: 600, height: 100 },
  { src: "/vexpedia.png", alt: "Expedia", width: 600, height: 100 },
  { src: "/vgoogle.png", alt: "Google", width: 600, height: 100 },
  { src: "/vhotel.png", alt: "Hotel", width: 600, height: 100 },
  { src: "/vhotwire.png", alt: "Hotel", width: 600, height: 100 },
  { src: "/vkayak.png", alt: "Kayak", width: 600, height: 100 },
  { src: "/vlastminute.png", alt: "Kayak", width: 600, height: 100 },
  { src: "/vorbitz.png", alt: "Kayak", width: 600, height: 100 },
  { src: "/vpriceline.png", alt: "Kayak", width: 600, height: 100 },
  { src: "/vskyscanner.png", alt: "Skyscanner", width: 600, height: 100 },
  { src: "/vtrivago.png", alt: "Trivago", width: 600, height: 100 },
  { src: "/vhrs.png", alt: "Trivago", width: 600, height: 100 },
  { src: "/vhostelworld.png", alt: "Trivago", width: 600, height: 100 },
  { src: "/vostrovok.png", alt: "Trivago", width: 600, height: 100 },
];
const HomePage: React.FC = () => {
  return (
    <div
      className={`${stintUltraExpanded.variable} font-sans min-h-screen flex flex-col items-center justify-center bg-gray-100`}
    >
      <div className="grid grid-cols-1 gap-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="rounded-lg shadow-md"
          />
        ))}
      </div>
      <ol className="list-decimal">
        <li>
          <a
            href="https://www.booking.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Booking.com
          </a>
        </li>
        <li>
          <a
            href="https://www.expedia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Expedia
          </a>
        </li>
        <li>
          <a
            href="https://www.hotels.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hotels.com
          </a>
        </li>
        <li>
          <a
            href="https://www.airbnb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Airbnb
          </a>
        </li>
        <li>
          <a
            href="https://www.agoda.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agoda
          </a>
        </li>
        <li>
          <a
            href="https://www.tripadvisor.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tripadvisor
          </a>
        </li>
        <li>
          <a
            href="https://www.kayak.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kayak
          </a>
        </li>
        <li>
          <a
            href="https://www.trivago.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trivago
          </a>
        </li>
        <li>
          <a
            href="https://www.priceline.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Priceline
          </a>
        </li>
        <li>
          <a
            href="https://www.hotwire.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hotwire
          </a>
        </li>
        <li>
          <a
            href="https://www.orbitz.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Orbitz
          </a>
        </li>
        <li>
          <a
            href="https://www.lastminute.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lastminute.com
          </a>
        </li>
        <li>
          <a
            href="https://www.hrs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HRS
          </a>
        </li>
        <li>
          <a
            href="https://www.hostelworld.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hostelworld
          </a>
        </li>
        <li>
          <a
            href="https://www.couchsurfing.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Couchsurfing
          </a>
        </li>
        <li>
          <a
            href="https://www.cozycozy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cozycozy
          </a>
        </li>
        <li>
          <a
            href="https://www.getaroom.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Getaroom
          </a>
        </li>
        <li>
          <a
            href="https://www.splendia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Splendia
          </a>
        </li>
        <li>
          <a
            href="https://www.ostrovok.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ostrovok
          </a>
        </li>
        <li>
          <a
            href="https://www.roomkey.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roomkey
          </a>
        </li>
      </ol>
    </div>
  );
};

export default HomePage;
