import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ZamysleniaPage() {
    const spiritualContent = [
        {
          title: 'Radosť v skúškach',
          author: 'Ján Kováč',
          summary: 'Zamyslenie nad tým, ako si udržať radosť a nádej aj v ťažkých životných chvíľach na základe Listu Filipanom.',
          image: 'https://placehold.co/600x400.png',
          imageHint: 'serene landscape',
        },
        {
          title: 'Sila modlitby',
          author: 'Mária Nováková',
          summary: 'Praktické tipy a povzbudenie k prehĺbeniu osobného vzťahu s Bohom prostredníctvom modlitby.',
          image: 'https://placehold.co/600x400.png',
          imageHint: 'praying hands',
        },
         {
          title: 'Odpustenie ako cesta k slobode',
          author: 'Peter Vážny',
          summary: 'Skúmanie biblického pohľadu na odpustenie a jeho oslobodzujúci vplyv na náš život.',
          image: 'https://placehold.co/600x400.png',
          imageHint: 'open path',
        },
      ];

    return (
        <div className="container mx-auto px-4 py-12">
            <section id="spiritual-content" className="rounded-lg">
                <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 font-headline">Duchovné zamyslenia</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {spiritualContent.map((content) => (
                    <Card key={content.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="p-0">
                        <Image
                            src={content.image}
                            alt={content.title}
                            width={600}
                            height={400}
                            className="w-full h-40 object-cover"
                            data-ai-hint={content.imageHint}
                        />
                        </CardHeader>
                        <CardContent className="p-6 flex-grow">
                        <CardTitle className="font-headline text-xl">{content.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">Autor: {content.author}</p>
                        <CardDescription className="mt-3">{content.summary}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                          <Button variant="outline" className="w-full">Čítať viac</Button>
                        </CardFooter>
                    </Card>
                    ))}
                </div>
                </div>
            </section>
        </div>
    );
}
