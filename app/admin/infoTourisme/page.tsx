import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const tables = [
  {
    name: "Country",
    fields: [
      "id",
      "name",
      "order",
      "code",
      "language",
      "currency",
      "createdAt",
      "updatedAt",
      "cities",
    ],
  },
  {
    name: "City",
    fields: [
      "id",
      "name",
      "order",
      "countryId",
      "createdAt",
      "updatedAt",
      "country",
      "neighborhoods",
      "landmarks",
      "addresses",
      "destinations",
      "DestinationToCity",
    ],
  },
  {
    name: "Neighborhood",
    fields: [
      "id",
      "name",
      "order",
      "cityId",
      "createdAt",
      "updatedAt",
      "city",
      "addresses",
    ],
  },
  {
    name: "Landmark",
    fields: [
      "id",
      "name",
      "order",
      "description",
      "type",
      "cityId",
      "latitude",
      "longitude",
      "createdAt",
      "updatedAt",
      "city",
    ],
  },
  {
    name: "Destination",
    fields: [
      "id",
      "name",
      "order",
      "description",
      "type",
      "popularityScore",
      "cityId",
      "latitude",
      "longitude",
      "radius",
      "createdAt",
      "updatedAt",
      "HotelCard",
      "City",
      "DestinationToCity",
    ],
  },
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
