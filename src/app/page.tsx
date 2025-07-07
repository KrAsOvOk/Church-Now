import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center">
        <BookOpen className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Vitajte v CASD Žilina
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-foreground/90 mb-8">
          Sme spoločenstvo kresťanov, ktorí sa usilujú o hlbší vzťah s Bohom a službu ľuďom v našom okolí. Sme otvorení pre každého.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/kto-sme">Zistite viac o nás</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/udalosti">Aktuálne udalosti</Link>
          </Button>
        </div>
      </section>

      <section className="mt-16">
        <Image 
          src="https://placehold.co/1200x400.png" 
          alt="Church community"
          data-ai-hint="church building"
          width={1200}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </section>
    </div>
  );
}
