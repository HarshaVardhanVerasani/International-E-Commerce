import {
  bottegaVeneta,
  chole,
  christianLouboutin,
  jackuemus,
  leMondeBeryl,
  leoLin,
  lieStudio,
  retori,
  sir,
  stellaMcCartney,
  valentinoGaravani,
  vivienneWestwood,
} from "../assets/images/imageFile";

interface SimplifiedFashionItem {
  id: number;
  imageUrl: string;
  name: string;
  type: string;
  price: string;
}

const fashionItems: SimplifiedFashionItem[] = [
  {
    id: 1,
    imageUrl: stellaMcCartney,
    name: "STELLA MCCARTNEY",
    type: "Organic Silk Layered Midi Dress",
    price: "$2100.0",
  },
  {
    id: 2,
    imageUrl: bottegaVeneta,
    name: "BOTTEGA VENETA",
    type: "Aviator Sunglasses",
    price: "$465.0",
  },
  {
    id: 3,
    imageUrl: sir,
    name: "SIR.",
    type: "Silk Serene Maxi Dress",
    price: "$500.0",
  },
  {
    id: 4,
    imageUrl: valentinoGaravani,
    name: "VALENTINO GARAVANI",
    type: "Leather 9 to 5 Shoulder Bag",
    price: "$3450.0",
  },
  {
    id: 5,
    imageUrl: leoLin,
    name: "LEO LIN",
    type: "Rose-Detail Fiona Mini Dress",
    price: "$760.0",
  },
  {
    id: 6,
    imageUrl: lieStudio,
    name: "LIÉ STUDIO",
    type: "Sterling Silver The Camille Earrings",
    price: "$200.0",
  },
  {
    id: 7,
    imageUrl: retori,
    name: "RETORI",
    type: "Cotton Check Maxi Dress",
    price: "$1750.0",
  },
  {
    id: 8,
    imageUrl: leMondeBeryl,
    name: "LE MONDE BERYL",
    type: "Suede Stella Ballet Flats",
    price: "$495.0",
  },
  {
    id: 9,
    imageUrl: jackuemus,
    name: "JACQUEMUS",
    type: "La Robe Valerie Midi Dress",
    price: "$1200.0",
  },
  {
    id: 10,
    imageUrl: christianLouboutin,
    name: "CHRISTIAN LOUBOUTIN",
    type: "Small Baggy Leather Tote Bag",
    price: "$2250.0",
  },
  {
    id: 11,
    imageUrl: vivienneWestwood,
    name: "VIVIENNE WESTWOOD",
    type: "Sunday Midi Dress",
    price: "$855.0",
  },
  {
    id: 12,
    imageUrl: chole,
    name: "CHLOÉ",
    type: "Maxime Wedge Sandals 135",
    price: "$1050.0",
  },
];

export { fashionItems, SimplifiedFashionItem };
