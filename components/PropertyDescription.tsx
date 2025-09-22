import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
function PropertyDescription({description }: {description: string}) {
  return (
    <p className={`py-10 text-gray-300 text-lg font-normal ${inter.className} text-gray-400`}>{description}</p>
  )
}

export default PropertyDescription