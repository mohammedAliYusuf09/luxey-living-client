import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface ShareLink {
  icon: LucideIcon
  href?: string
  onClick?: () => void
  label?: string
}

export interface Property {
  id: number;
  title: string;
  price: number;
  beds: number;
  sqFt: number;
  type: string;
  parking: number;
  yearBuilt: number;
  imageUrl: StaticImageData;
}