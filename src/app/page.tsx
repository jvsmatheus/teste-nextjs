import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowDownRight, Check, List, Plus, SquarePen, Trash } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        <CardHeader className="flex gap-2">
            <Input placeholder="Adicionar tarefa"></Input>
            <Button className="cursor-pointer">
              <Plus />Cadastrar
            </Button>
        </CardHeader>

        <CardContent>
          <Separator className="mb-6" />
          <div className="flex gap-2">
            <Badge className="cursor-pointer" variant={'default'}><List />Todas</Badge>
            <Badge className="cursor-pointer" variant={'outline'}><ArrowDownRight />Não finalizados</Badge>
            <Badge className="cursor-pointer" variant={'outline'}><Check />Concluído</Badge>
          </div>

          <div className="mt-4 border-b">
            <div className="h-14 flex justify-between items-center border-t">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar react</p>
              <div className="flex gap-2 items-center">
                <SquarePen size={16} className="cursor-pointer"/>
                <Trash size={16} className="cursor-pointer"/>
              </div>
            </div>
          </div>
        </CardContent>

      </Card>
    </main>
  );
}
