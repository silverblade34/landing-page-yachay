import { FooterBlur } from "@/components/footer/footer-blur";
import { XIcon, LinkedInIcon, GithubIcon } from "@/components/footer/icons";
import Link from "next/link";

const links = [
  {
    title: "Yachay",
    links: [
      {
        label: "Descargar App",
        href: "https://apps.apple.com/",
        title: "Descarga Yachay desde App Store",
      },
      {
        label: "Características",
        href: "/#features",
        title: "Ver características",
      },
      {
        label: "Únete a la Beta",
        href: "/pricing",
        title: "Registrarse en la beta",
      },
    ],
  },
  {
    title: "Productos",
    links: [
      {
        label: "Para Android",
        href: "https://play.google.com/store",
        title: "Descargar en Android",
      },
      {
        label: "Para iPhone",
        href: "https://apps.apple.com/",
        title: "Descargar en iOS",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Términos y Condiciones",
        href: "/terms-and-conditions",
        title: "Leer Términos y Condiciones",
      },
      {
        label: "Política de Privacidad",
        href: "/privacy-policy",
        title: "Leer Política de Privacidad",
      },
      {
        label: "Política de Reembolso",
        href: "/refund-policy",
        title: "Leer Política de Reembolso",
      },
    ],
  },
  {
    title: "Síguenos",
    links: [
      {
        label: (
          <div className="flex items-center gap-2">
            <XIcon className="h-4 w-4" />
            <span>Twitter</span>
          </div>
        ),
        href: "https://x.com/",
        title: "Síguenos en Twitter",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <LinkedInIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </div>
        ),
        href: "https://www.linkedin.com/",
        title: "Conéctate en LinkedIn",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <GithubIcon className="h-4 w-4" />
            <span>Github</span>
          </div>
        ),
        href: "https://github.com/",
        title: "Ver nuestro GitHub",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 tracking-tight md:grid-cols-4">
        {links.map((link) => (
          <div key={link.title} className="mb-10 text-center">
            <h3 className="text-muted-foreground mb-8">{link.title}</h3>
            <ul className="flex flex-col items-center gap-8">
              {link.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    title={link.title}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}