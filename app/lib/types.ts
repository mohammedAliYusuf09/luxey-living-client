import { LucideIcon } from "lucide-react";

export interface ShareLink {
  icon: LucideIcon
  href?: string
  onClick?: () => void
  label?: string
}