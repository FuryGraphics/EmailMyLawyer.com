"use client";

import { useEffect, useState } from "react";
import { Phone, Calendar } from "lucide-react";
import { site } from "@/lib/site";

// Floating sticky call/consult bar — mobile only, appears after scrolling.
export function MobileCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-navy-900/95 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 rounded-full bg-gold py-3 font-semibold text-navy-900"
        >
          <Phone width={17} height={17} /> Call Now
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 rounded-full border border-cream/30 py-3 font-semibold text-cream"
        >
          <Calendar width={17} height={17} /> Free Review
        </a>
      </div>
    </div>
  );
}
