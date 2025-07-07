import { MapPin, Mail, Phone } from 'lucide-react';

export default function KontaktPage() {
  return (
    <div className="container mx-auto px-4 py-12">
        <section id="contact" className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-12">Kontaktujte nás</h1>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
                <div className="flex flex-col items-center space-y-2">
                    <MapPin className="h-10 w-10 mb-3 text-primary" />
                    <h3 className="font-semibold text-xl">Naša adresa</h3>
                    <p className="text-muted-foreground">Zbor Cirkvi adventistov siedmeho dňa</p>
                    <p className="text-muted-foreground">Štúrova 9, 010 01 Žilina</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <Mail className="h-10 w-10 mb-3 text-primary" />
                    <h3 className="font-semibold text-xl">Email</h3>
                    <a href="mailto:info@casdza.sk" className="text-muted-foreground hover:text-primary transition-colors">info@casdza.sk</a>
                    <a href="mailto:kazatel@casdza.sk" className="text-muted-foreground hover:text-primary transition-colors">kazatel@casdza.sk</a>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <Phone className="h-10 w-10 mb-3 text-primary" />
                    <h3 className="font-semibold text-xl">Telefón</h3>
                    <p className="text-muted-foreground">+421 123 456 789</p>
                </div>
            </div>
        </section>
    </div>
  );
}
