import Image from "@/components/AssetImage";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { office } from "@/lib/office";

export default function Footer() {
  return (
    <footer>


      {/* Main Footer */}
      <div className="bg-brand-950 text-brand-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/logo.svg"
                alt="VR Distribution"
                width={796}
                height={344}
                className="h-10 w-auto brightness-0 invert opacity-90"
                unoptimized
              />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your reliable sourcing partner for premium electronic products.
              Trusted by buyers across Europe, the Middle East, and beyond.
            </p>
            <a
              href="mailto:info@vrdistribution.ae"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@vrdistribution.ae
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent-500 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@vrdistribution.ae"
                    className="hover:text-white transition-colors block"
                  >
                    info@vrdistribution.ae
                  </a>
                  <a
                    href="mailto:exports@vrdistribution.ae"
                    className="hover:text-white transition-colors block"
                  >
                    exports@vrdistribution.ae
                  </a>
                </div>
              </li>

            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">Office Address</h4>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 text-accent-500 flex-shrink-0" aria-hidden="true" />
              <div>
                <address className="not-italic leading-relaxed">{office.address}</address>
                <a href={office.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-accent-400 hover:text-accent-300">Get directions <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-6 text-center text-xs text-brand-500">
          &copy; {new Date().getFullYear()} VR Distribution. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
