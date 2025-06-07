/*
model Label {
  id          String   @id @default(uuid())
  name        String
  order       Int?     @default(100)
  code        String   @unique
  description String?
  category    String
  icon        String?
  color       String?
  priority    Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  HotelDetails     HotelDetails?      @relation(fields: [hotelDetailsId], references: [id])
  hotelDetailsId   String?
  HotelCardToLabel HotelCardToLabel[]

  @@map("labels")
}
*/

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Liste des tables et champs, corrigée pour ne contenir que des objets JS
const tables = [
  {
    name: "HotelGroup",
    fields: [
      "id",
      "name",
      "order",
      "code",
      "description",
      "website",
      "logoUrl",
      "foundedYear",
      "headquarters",
      "totalProperties",
      "totalRooms",
      "marketCap",
      "annualRevenue",
      "createdAt",
      "updatedAt",
      "HotelCard",
    ],
  },
  {
    name: "HotelHighlight",
    fields: [
      "id",
      "title",
      "order",
      "description",
      "category",
      "icon",
      "priority",
      "isPromoted",
      "hotelId",
      "createdAt",
      "updatedAt",
      "HotelCardToHotelHighlight",
    ],
  },
  {
    name: "HotelCard",
    fields: [
      "id",
      "name",
      "idCity",
      "shortDescription",
      "starRating",
      "overallRating",
      "ratingAdjective",
      "reviewCount",
      "basePricePerNight",
      "regularPrice",
      "currency",
      "isPartner",
      "promoMessage",
      "imageMessage",
      "cancellationPolicy",
      "accommodationTypeId",
      "destinationId",
      "hotelGroupId",
      "latitude",
      "longitude",
      "detailsId",
      "parking",
      "images",
      "HotelAmenity",
      "details",
      "accommodationType",
      "destination",
      "hotelGroup",
      "HotelCardToHotelHighlight",
      "HotelCardToLabel",
      "HotelCardToAccessibilityOption",
      "HotelCardToHotelAmenity",
    ],
  },
  {
    name: "HotelDetails",
    fields: [
      "id",
      "idHotelCard",
      "description",
      "addressId",
      "createdAt",
      "updatedAt",
      "address",
      "RoomAmenity",
      "Label",
      "HotelCard",
      "HotelDetailsToRoomAmenity",
    ],
  },
  // Ajoute ici d’autres tables principales ou de jointure si besoin
];

export default function TableAccordion() {
  return (
    <div className="max-w-2xl mx-auto my-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Gestion des tables Prisma
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {tables.map((table) => (
          <AccordionItem key={table.name} value={table.name}>
            <AccordionTrigger>
              <span className="font-semibold">{table.name}</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                {table.fields.map((field) => (
                  <li key={field}>{field}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
