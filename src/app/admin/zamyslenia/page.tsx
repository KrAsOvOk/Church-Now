'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import Link from 'next/link';

const reflectionSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: "Názov je povinný." }),
  author: z.string().min(1, { message: "Autor je povinný." }),
});

type ReflectionFormValues = z.infer<typeof reflectionSchema>;

interface Reflection {
    id: string;
    title: string;
    author: string;
}

const initialReflections: Reflection[] = [
    {
      id: '1',
      title: 'Radosť v skúškach',
      author: 'Ján Kováč',
    },
    {
      id: '2',
      title: 'Sila modlitby',
      author: 'Mária Nováková',
    },
     {
      id: '3',
      title: 'Odpustenie ako cesta k slobode',
      author: 'Peter Vážny',
    },
];

export default function ManageReflectionsPage() {
  const [reflections, setReflections] = useState<Reflection[]>(initialReflections);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingReflection, setEditingReflection] = useState<Reflection | null>(null);

  const form = useForm<ReflectionFormValues>({
    resolver: zodResolver(reflectionSchema),
    defaultValues: {
      title: '',
      author: '',
    },
  });

  const handleAddNew = () => {
    setEditingReflection(null);
    form.reset({ title: '', author: '' });
    setIsDialogOpen(true);
  };

  const handleEdit = (reflection: Reflection) => {
    setEditingReflection(reflection);
    form.reset(reflection);
    setIsDialogOpen(true);
  };
  
  const handleDelete = (reflectionId: string) => {
    setReflections(reflections.filter(reflection => reflection.id !== reflectionId));
  };

  const onSubmit = (data: ReflectionFormValues) => {
    if (editingReflection) {
      setReflections(reflections.map(r => r.id === editingReflection.id ? { ...r, ...data } : r));
    } else {
      const newReflection: Reflection = { id: Date.now().toString(), ...data };
      setReflections([...reflections, newReflection]);
    }
    setIsDialogOpen(false);
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-12">
       <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-4xl font-bold font-headline">Správa zamyslení</h1>
            <p className="text-muted-foreground">Pridávajte, upravujte a mažte zamyslenia.</p>
        </div>
        <Button onClick={handleAddNew}>
          <PlusCircle className="mr-2 h-4 w-4" /> Pridať nové zamyslenie
        </Button>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Názov</TableHead>
                <TableHead>Autor</TableHead>
                <TableHead className="text-right">Akcie</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reflections.map((content) => (
                <TableRow key={content.id}>
                  <TableCell className="font-medium">{content.title}</TableCell>
                  <TableCell>{content.author}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(content)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Naozaj chcete odstrániť toto zamyslenie?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Táto akcia je nezvratná. Zamyslenie "{content.title}" bude natrvalo odstránené.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Zrušiť</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(content.id)}>Odstrániť</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                  <DialogTitle>{editingReflection ? 'Upraviť zamyslenie' : 'Pridať nové zamyslenie'}</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
                      <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Názov</FormLabel>
                                  <FormControl>
                                      <Input placeholder="Názov zamyslenia" {...field} />
                                  </FormControl>
                                  <FormMessage />
                              </FormItem>
                          )}
                      />
                      <FormField
                          control={form.control}
                          name="author"
                          render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Autor</FormLabel>
                                  <FormControl>
                                      <Input placeholder="Meno autora" {...field} />
                                  </FormControl>
                                  <FormMessage />
                              </FormItem>
                          )}
                      />
                      <DialogFooter>
                          <DialogClose asChild>
                            <Button type="button" variant="outline">Zrušiť</Button>
                          </DialogClose>
                          <Button type="submit">{editingReflection ? 'Uložiť zmeny' : 'Vytvoriť zamyslenie'}</Button>
                      </DialogFooter>
                  </form>
              </Form>
          </DialogContent>
      </Dialog>
      
      <Button variant="outline" asChild className="mt-8">
         <Link href="/admin">Späť na administráciu</Link>
      </Button>
    </div>
  );
}
