import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Button } from "@/components/ui/button";
import { Pill, PillAvatar, PillAvatarGroup } from "@/components/ui/pill";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="z-1 grid w-full place-items-center p-8">
      <BackgroundBlur className="-top-40 md:-top-0" />
      <Nav />
      <div className="mt-16 flex flex-col items-center gap-6">
        <Pill>
          <PillAvatarGroup className="hidden sm:flex">
            <PillAvatar src="/avatars/1.jpg" />
            <PillAvatar src="/avatars/2.jpg" />
            <PillAvatar src="/avatars/3.jpg" />
            <PillAvatar src="/avatars/4.jpg" />
          </PillAvatarGroup>
          <p className="text-muted-foreground px-2 text-xs font-medium sm:border-l-1 sm:text-sm">
            🚀 <span className="text-foreground">Beta Exclusiva</span> · Acceso Anticipado
          </p>
        </Pill>
        <h1 className="text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-7xl">
          Aprende Cualquier Cosa
          <span className="text-muted-foreground block">en 30 Segundos</span>
        </h1>
        <p className="max-w-lg text-center leading-6 tracking-tight sm:text-xl">
          La primera app que usa IA para crear pruebas personalizadas infinitas. Estudia, compite y domina cualquier tema mientras te diviertes.
        </p>
        {/* Pill de beneficio adicional */}
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <span className="bg-secondary/20 text-foreground px-4 py-2 rounded-full">
            ✨ Gratis durante la Beta
          </span>
          <span className="bg-secondary/20 text-foreground px-4 py-2 rounded-full">
            🎯 Acceso Prioritario
          </span>
          <span className="bg-secondary/20 text-foreground px-4 py-2 rounded-full">
            🎁 Beneficios Exclusivos
          </span>
        </div>

        {/* Botones de CTA */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <Button className="w-full sm:flex-1" size="lg" asChild>
            <Link href="/pricing">Reserva Tu Acceso Gratis</Link>
          </Button>
          <Button variant="outline" className="w-full sm:flex-1" size="lg" asChild>
            <Link href="https://apk-sysnet.s3.us-east-2.amazonaws.com/app-yachay.apk" download>
              <Download className="mr-2 size-4" />
              Descargar APK Android
            </Link>
          </Button>
        </div>

        {/* Micro-copy de urgencia */}
        <p className="text-xs text-muted-foreground -mt-2 mb-2">
          Sin tarjeta · APK directo sin Play Store · Lanzamiento Noviembre 2025
        </p>

        <div className="relative mb-10">
          <Image src="/app-image-1.png" alt="Yachay App Preview" width={1000} height={445} />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}