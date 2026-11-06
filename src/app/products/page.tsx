import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Export Products",
  description:
    "Explore 11+ categories of premium Indian export products — jaggery, textiles, leather, carpets, handicrafts, spices, rice, tea, and more. Competitive pricing, quality assured.",
};
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "amd",
    imageSrc: "/images/products/amd.png",
  },
  {
    name: "asus",
    imageSrc: "/images/products/asus.png",
  },
  {
    name: "bose",
    imageSrc: "/images/products/bose.png",
  },
  {
    name: "braun",
    imageSrc: "/images/products/braun.png",
  },
  {
    name: "canon",
    imageSrc: "/images/products/canon.png",
  },
  {
    name: "corsair",
    imageSrc: "/images/products/corsair.png",
  },
  {
    name: "delonghi",
    imageSrc: "/images/products/delonghi.png",
  },
  {
    name: "dji",
    imageSrc: "/images/products/dji.png",
  },
  {
    name: "dyson",
    imageSrc: "/images/products/dyson.png",
  },
  {
    name: "epson",
    imageSrc: "/images/products/epson.png",
  },
  {
    name: "fitbit",
    imageSrc: "/images/products/fitbit.png",
  },
  {
    name: "fujifilm",
    imageSrc: "/images/products/fujifilm.png",
  },
  {
    name: "garmin",
    imageSrc: "/images/products/garmin.png",
  },
  {
    name: "gigabyte",
    imageSrc: "/images/products/gigabyte.png",
  },
  {
    name: "gopro",
    imageSrc: "/images/products/gopro.png",
  },
  {
    name: "hyper",
    imageSrc: "/images/products/hyper.png",
  },
  {
    name: "intel",
    imageSrc: "/images/products/intel.png",
  },
  {
    name: "jabra",
    imageSrc: "/images/products/jabra.png",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="One of the leading wholesalers of consumer electronics in the middle East"
        imageSrc="/images/heroes/products.jpg"
        imageAlt="Product warehouse"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.05} className="p-8">
                <ProductCard {...p} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Looking for a specific product?
            </h2>
            <p className="text-brand-400 mb-8 text-lg">
              We source from a network of Top consumer Electronic Brands.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-900 font-semibold px-8 py-3.5 rounded-full hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 group"
            >
              Contact Us!
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
