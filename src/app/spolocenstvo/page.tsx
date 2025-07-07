import Image from 'next/image';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function SpolocenstvoPage() {
    const communityImages = [
        { src: 'https://placehold.co/600x400.png', alt: 'Spoločný výlet do prírody', hint: 'church community' },
        { src: 'https://placehold.co/600x400.png', alt: 'Krst v našom zbore', hint: 'baptism event' },
        { src: 'https://placehold.co/600x400.png', alt: 'Dobrovoľnícka pomoc v komunite', hint: 'volunteering group' },
        { src: 'https://placehold.co/600x400.png', alt: 'Vianočné stretnutie zboru', hint: 'christmas celebration' },
        { src: 'https://placehold.co/600x400.png', alt: 'Detská besiedka', hint: 'children playing' },
      ];

    return (
        <div className="container mx-auto px-4 py-12">
            <section id="community">
                <h2 className="text-3xl font-bold text-center mb-8 font-headline">Život v našom zbore</h2>
                <Carousel className="w-full max-w-4xl mx-auto"
                opts={{
                    align: "start",
                    loop: true,
                }}>
                <CarouselContent>
                    {communityImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                        <Card className="overflow-hidden">
                            <CardContent className="flex aspect-square items-center justify-center p-0">
                            <Image src={image.src} alt={image.alt} width={600} height={400} className="w-full h-full object-cover" data-ai-hint={image.hint}/>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
            </section>
        </div>
    );
}
