"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, Phone, MapPin, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { mainNav, servingStrip } from "@/lib/nav";
import { site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [mobilePA, setMobilePA] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change.
  useEffect(() => {
    setMobileOpen(false);
    setOpenDrop(null);
    setMobilePA(false);
  }, [pathname]);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-navy-900/95 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* Serving strip */}
      <div
        className={`hidden overflow-hidden border-b border-line/60 transition-all md:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="container-x flex items-center justify-between py-2 text-xs text-cream-dim">
          <span className="flex items-center gap-1.5">
            <MapPin width={13} height={13} className="text-gold" /> Serving{" "}
            {servingStrip.join(" · ")} &amp; all of San Diego County
          </span>
          <span className="flex items-center gap-4">
            <a href={`mailto:${site.email}`} className="hover:text-cream transition-colors">
              {site.email}
            </a>
            <span className="text-gold">Se Habla Español</span>
          </span>
        </div>
      </div>

      {/* Main row */}
      <div className="container-x flex items-center justify-between py-3.5">
        <Logo wordmarkOnly />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDrop(item.href)}
                onMouseLeave={() => setOpenDrop(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-gold" : "text-cream hover:text-gold"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    width={15}
                    height={15}
                    className={`transition-transform ${openDrop === item.href ? "rotate-180" : ""}`}
                  />
                </Link>

                <AnimatePresence>
                  {openDrop === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                    >
                      <div className="rounded-2xl border border-line bg-navy-900/98 p-3 shadow-2xl backdrop-blur-md">
                        <div className="grid grid-cols-2 gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-cream transition-colors hover:bg-gold/10"
                            >
                              <span className="group-hover:text-gold">{child.label}</span>
                              <ArrowRight
                                width={14}
                                height={14}
                                className="text-cream-dim/0 transition-colors group-hover:text-gold"
                              />
                            </Link>
                          ))}
                        </div>
                        <Link
                          href="/practice-areas"
                          className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-gold/10 px-4 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
                        >
                          View all practice areas <ArrowRight width={14} height={14} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-gold" : "text-cream hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.phoneHref} className="btn-gold hidden !px-5 !py-2.5 text-sm sm:inline-flex">
            <Phone width={16} height={16} /> {site.phone}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-cream lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X width={20} height={20} /> : <Menu width={20} height={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <nav className="container-x flex max-h-[calc(100vh-5rem)] flex-col gap-1 overflow-y-auto py-4">
              {mainNav.map((item) =>
                item.children ? (
                  <div key={item.href}>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className="flex-1 rounded-lg px-3 py-3 text-base font-medium text-cream"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobilePA((o) => !o)}
                        className="flex h-11 w-11 items-center justify-center text-cream-dim"
                        aria-label="Toggle practice areas"
                        aria-expanded={mobilePA}
                      >
                        <ChevronDown
                          width={18}
                          height={18}
                          className={`transition-transform ${mobilePA ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    <AnimatePresence initial={false}>
                      {mobilePA && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-lg px-3 py-2.5 text-sm text-cream-dim hover:text-gold"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-lg px-3 py-3 text-base font-medium ${
                      isActive(item.href) ? "text-gold" : "text-cream"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <a href={site.phoneHref} className="btn-gold mt-3">
                <Phone width={16} height={16} /> Call {site.phone}
              </a>
              <Link href="/contact" className="btn-outline mt-1">
                Free Case Review
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
