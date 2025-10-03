import { FeaturesCarousel } from "@/components/features/features-carousel";
import { FeaturesTabs } from "@/components/features/features-tabs";
import { Badge } from "@/components/ui/badge";
import { BrainCircuitIcon, ZapIcon, TrophyIcon, SparklesIcon } from "lucide-react";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

const features = [
  {
    icon: <SparklesIcon size={20} />,
    title: "Tu Compañero de Aprendizaje",
    description: "Elige tu avatar personalizado que te acompañará en todo tu viaje de aprendizaje. Configura tu perfil, intereses y empieza tu aventura educativa.",
    image: "/slider-tab1.png",
  },
  {
    icon: <BrainCircuitIcon size={20} />,
    title: "Quizzes Inteligentes con IA",
    description: "Genera quizzes personalizados configurando título, tema, dificultad, cantidad de preguntas y categoría. Mientras se genera, juega trivias interactivas para aprovechar cada segundo.",
    image: "/slider-tab2.png",
  },
  {
    icon: <ZapIcon size={20} />,
    title: "Feedback Instantáneo y Detallado",
    description: "Responde pregunta por pregunta con pistas disponibles cuando las necesites. Descubre al instante si acertaste y al final recibe un resumen completo con explicaciones profundas.",
    image: "/slider-tab3.png",
  },
  {
    icon: <TrophyIcon size={20} />,
    title: "Organiza en Módulos",
    description: "Agrupa tus quizzes por curso o tema en módulos personalizados. Repasa cuando quieras, retoma quizzes anteriores o genera nuevos con el contexto del módulo.",
    image: "/slider-tab4.png",
  },
] satisfies Feature[];

export function Features() {
  return (
    <div id="features" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <Badge variant="secondary" className="uppercase">
        Características
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Estudiar nunca fue
        <div className="text-muted-foreground">tan divertido</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Combinamos inteligencia artificial con gamificación para crear la experiencia de aprendizaje más adictiva del mundo
      </p>
      <FeaturesCarousel features={features} className="block lg:hidden" />
      <FeaturesTabs features={features} className="hidden lg:block" />
    </div>
  );
}
