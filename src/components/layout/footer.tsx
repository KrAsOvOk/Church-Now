import { Globe, UserCog } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-12">
      <div className="container py-8 px-4 text-center">
        <div className="border-t pt-6">
            <div className="flex justify-center items-center space-x-6">
                <a href="https://www.casd.sk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Globe className="h-5 w-5" />
                    Slovenské združenie CASD
                </a>
                <Link href="/admin" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <UserCog className="h-5 w-5" />
                    Administrácia
                </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
                © {new Date().getFullYear()} CASD Žilina. Všetky práva vyhradené.
            </p>
        </div>
      </div>
    </footer>
  );
}
