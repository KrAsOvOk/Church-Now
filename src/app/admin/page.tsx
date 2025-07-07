import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ListChecks, CalendarDays, BookText } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline">Administrácia</h1>
        <p className="text-muted-foreground">Správa obsahu webstránky CASD Žilina.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-md">
                    <CalendarDays className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Správa udalostí</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>Pridávajte, upravujte alebo odstraňujte nadchádzajúce udalosti a tábory.</CardDescription>
            <Button variant="outline" className="mt-4 w-full" asChild>
                <Link href="/admin/udalosti">Spravovať udalosti</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
             <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-md">
                    <BookText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Správa zamyslení</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>Publikujte nové duchovné zamyslenia a spravujte existujúce príspevky.</CardDescription>
            <Button variant="outline" className="mt-4 w-full" asChild>
                <Link href="/admin/zamyslenia">Spravovať zamyslenia</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-md">
                    <ListChecks className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Ďalšie možnosti</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>Spravujte galériu spoločenstva alebo iné časti stránky.</CardDescription>
            <Button variant="outline" className="mt-4 w-full">Ďalšia správa</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
