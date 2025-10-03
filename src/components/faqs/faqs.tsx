import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";

function AccordionItemFAQs(props: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      {...props}
      className={cn(
        "bg-secondary/30 data-[state=open]:bg-card data-[state=open]:border-border rounded-lg border border-transparent px-5 py-2 transition-colors data-[state=open]:shadow-sm lg:px-7",
        props.className,
      )}
    />
  );
}

function AccordionTriggerFAQs(props: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      {...props}
      className={cn("[&[data-state=open]>svg]:text-foreground text-base lg:text-lg", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-muted-foreground lg:text-base", props.className)} />;
}

export function FAQs() {
  return (
    <div id="faqs" className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25">
      <div className="flex w-full flex-col gap-6">
        <Badge variant="secondary" className="mb-2 uppercase">
          FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Preguntas
          <br />
          Frecuentes <span className="text-muted-foreground">sobre Yachay</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Todo lo que necesitas saber antes de unirte a la beta.
        </p>
        <Button className="w-fit" size="lg" asChild>
          <Link href="/pricing">Únete Ahora</Link>
        </Button>
      </div>
      <Accordion type="single" collapsible defaultValue="free" className="grid w-full gap-4">
        <AccordionItemFAQs value="free">
          <AccordionTriggerFAQs>¿La beta es realmente gratis?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Sí, 100% gratis durante el periodo de beta. Sin tarjeta de crédito, sin compromisos. Solo queremos tu feedback para mejorar.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="topics">
          <AccordionTriggerFAQs>¿Sobre qué temas puedo crear quizzes?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Sobre literalmente cualquier cosa: matemáticas, historia, idiomas, ciencias, medicina, derecho, programación, cocina, deportes... ¡Lo que quieras! La IA genera preguntas sobre cualquier tema.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="devices">
          <AccordionTriggerFAQs>¿Funciona en iOS y Android?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Actualmente estamos en beta para Android e iOS. Ambas versiones están disponibles para beta testers.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="compete">
          <AccordionTriggerFAQs>¿Puedo competir con mis amigos?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              ¡Sí! Puedes hacer duelos 1vs1, crear grupos de estudio, participar en ligas y ver rankings globales. Aprender es más divertido con amigos.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
      </Accordion>
    </div>
  );
}