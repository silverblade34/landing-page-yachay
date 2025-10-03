import { Badge } from "@/components/ui/badge";
import { TestimonialMarquee } from "@/components/testimonials/testimonial-marquee";

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
};

const testimonials = [
  {
    name: "Carlos Méndez",
    date: "Sep 15",
    title: "Estudiante de Ingeniería",
    content: `"Yachay me salvó en mis finales. Crear quizzes personalizados sobre termodinámica fue un game-changer."`,
    rating: 5,
  },
  {
    name: "Ana Rodríguez",
    date: "Sep 20",
    title: "Preparando TOEFL",
    content: `"El sistema de puntos y niveles me mantiene súper motivada. Ya llevo 30 días de racha estudiando inglés."`,
    rating: 5,
  },
  {
    name: "Diego Torres",
    date: "Sep 22",
    title: "Profesor de Historia",
    content: `"Uso Yachay para crear pruebas para mis alumnos. La IA genera preguntas increíbles y me ahorra horas."`,
    rating: 5,
  },
  {
    name: "Sofía Lima",
    date: "Sep 25",
    title: "Estudiante de Medicina",
    content: `"Los duelos 1vs1 con mis compañeros de clase hacen que repasar anatomía sea adictivo, no aburrido."`,
    rating: 5,
  },
] satisfies Testimonial[];

export function Testimonials() {
  return (
    <div id="testimonials" className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-14 md:py-25">
      <Badge variant="secondary" className="mb-2 uppercase">
        Testimonios
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Lo Que Dicen
        <div className="text-muted-foreground">Nuestros Beta Testers</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Cientos de estudiantes ya están aprendiendo más rápido y divirtiéndose en el proceso
      </p>
      <div className="relative w-[calc(100%+3rem)] overflow-x-hidden py-4 lg:w-full">
        <TestimonialMarquee testimonials={testimonials} className="mb-4" />
        <TestimonialMarquee testimonials={testimonials} reverse />
      </div>
    </div>
  );
}