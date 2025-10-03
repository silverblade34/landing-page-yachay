"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Download, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const features = [
  "Genera quizzes ilimitados con IA",
  "Juega trivias mientras esperas",
  "Feedback detallado en cada pregunta",
  "Organiza tu aprendizaje en módulos",
  "Elige tu avatar compañero personalizado",
];

export function BetaAccess() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irá la lógica para enviar los datos
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center px-6">
      <h1 className="mt-8 mb-4 text-3xl font-bold md:text-center md:text-4xl">
        Accede a la Beta
      </h1>
      <p className="text-muted-foreground mb-6 text-center text-base">
        Sé de los primeros en experimentar el futuro del aprendizaje con IA
      </p>

      <ul className="mb-8 w-full space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="text-foreground/60 flex items-center text-base">
            <div className="bg-primary mr-3 grid place-items-center rounded-full p-0.5">
              <Check className="size-4 p-0.5 text-white" />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      {!isSubmitted ? (
        <div className="w-full space-y-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Juan Pérez"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="university">Universidad (opcional)</Label>
            <Input
              id="university"
              name="university"
              type="text"
              placeholder="Tu universidad"
              value={formData.university}
              onChange={handleChange}
            />
          </div>

          <Button onClick={handleSubmit} className="w-full" size="lg">
            <Mail className="mr-2 size-4" />
            Solicitar Acceso a la Beta
          </Button>
        </div>
      ) : (
        <div className="bg-primary/10 border-primary/20 mb-6 w-full rounded-lg border p-6 text-center">
          <Check className="text-primary mx-auto mb-3 size-12" />
          <h3 className="mb-2 text-lg font-semibold">¡Solicitud Enviada!</h3>
          <p className="text-muted-foreground text-sm">
            Te enviaremos un correo con las instrucciones de acceso pronto.
          </p>
        </div>
      )}

      <div className="mb-8 w-full">
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-muted-foreground px-2">O descarga directamente</span>
          </div>
        </div>

        <Button variant="outline" className="w-full" size="lg" asChild>
          <Link href="https://apk-sysnet.s3.us-east-2.amazonaws.com/app-yachay.apk" download>
            <Download className="mr-2 size-4" />
            Descargar APK Android
          </Link>
        </Button>
        <p className="text-muted-foreground mt-2 text-center text-xs">
          Sin necesidad de Play Store
        </p>
      </div>

      <div className="text-muted-foreground flex flex-wrap justify-center gap-4 text-sm underline">
        <Link href="/privacy-policy">Política de Privacidad</Link>
        <Link href="/terms-and-conditions">Términos y Condiciones</Link>
      </div>
    </div>
  );
}