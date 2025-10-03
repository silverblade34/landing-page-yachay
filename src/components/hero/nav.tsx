import { MobileNav } from "@/components/hero/mobile-nav";
import { DesktopNav } from "@/components/hero/desktop-nav";

const navItems = [
  {
    label: "Características",
    href: "/#features",
  },
  {
    label: "Testimonios",
    href: "/#testimonials",
  },
  {
    label: "Preguntas Frecuentes",
    href: "/#faqs",
  },
];

export function Nav() {
  return (
    <>
      <MobileNav className="flex md:hidden" items={navItems} />
      <DesktopNav className="hidden md:flex" items={navItems} />
    </>
  );
}
