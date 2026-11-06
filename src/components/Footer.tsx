import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer>


      {/* Main Footer */}
      <div className="bg-brand-950 text-brand-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/logo.svg"
                alt="Fast Scaling Trade"
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
              href="mailto:info@fastscalingai.com"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@vrdistribution.ae
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">
              Products
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors duration-200"
                >
                  Graphic &amp; cards
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors duration-200"
                >
                  Cameras &amp; Garmen
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors duration-200"
                >
                  IT Components
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors duration-200"
                >
                  Printers &amp; Canon
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors duration-200"
                >
                  Gamings
                </Link>
              </li>
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">
              Markets
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/markets"
                  className="hover:text-white transition-colors duration-200"
                >
                  United States
                </Link>
              </li>
              <li>
                <Link
                  href="/markets"
                  className="hover:text-white transition-colors duration-200"
                >
                  France
                </Link>
              </li>
              <li>
                <Link
                  href="/markets"
                  className="hover:text-white transition-colors duration-200"
                >
                  Poland
                </Link>
              </li>
              <li>
                <Link
                  href="/markets"
                  className="hover:text-white transition-colors duration-200"
                >
                  UAE
                </Link>
              </li>
              <li>
                <Link
                  href="/markets"
                  className="hover:text-white transition-colors duration-200"
                >
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link
                  href="/markets"
                  className="hover:text-white transition-colors duration-200"
                >
                  China
                </Link>
              </li>
            </ul>
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
                    href="mailto:info@fastscalingai.com"
                    className="hover:text-white transition-colors block"
                  >
                    info@vrdistribution.ae
                  </a>
                  <a
                    href="mailto:exports@fastscalingai.com"
                    className="hover:text-white transition-colors block"
                  >
                    exports@vrdistribution.ae
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-500 flex-shrink-0" />
                <span>Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 py-6 text-center text-xs text-brand-500">
          &copy; {new Date().getFullYear()} Fast Scaling Trade. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
