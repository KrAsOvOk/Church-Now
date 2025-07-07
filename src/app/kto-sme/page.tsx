import { Users } from 'lucide-react';

export default function KtoSmePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <Users className="mx-auto h-16 w-16 text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold font-headline">
              Kto sme
            </h1>
        </div>
        <div className="text-lg text-foreground/90 space-y-6 text-left md:text-justify">
            <p>
            Sme spoločenstvo kresťanov, ktorí sa hlásia k Cirkvi adventistov siedmeho dňa. V Žiline tvoríme živú komunitu, ktorá sa usiluje o hlbší vzťah s Bohom a praktickú službu ľuďom v našom okolí.
            </p>
            <p>
            Naším najvyšším cieľom je osláviť Boha a prijímať Jeho lásku, ktorú nám zjavil v Ježišovi Kristovi. Veríme, že Biblia je inšpirovaným Božím slovom a spoľahlivým sprievodcom pre vieru a život. Naše stretnutia sú priestorom pre spoločné štúdium Biblie, modlitby, piesne a vzájomné povzbudenie.
            </p>
            <p>
            Sme otvorení pre každého, bez ohľadu na jeho minulosť alebo životnú cestu. Či už ste na začiatku svojho duchovného hľadania, alebo túžite po spoločenstve, kde môžete rásť vo viere, ste medzi nami srdečne vítaní.
            </p>
            <p>
            Okrem bohoslužieb organizujeme aj rôzne komunitné aktivity, prednášky o zdraví, tábory pre deti a mládež a ďalšie podujatia, ktorými chceme byť na prospech nášmu mestu.
            </p>
        </div>
      </section>
    </div>
  );
}
