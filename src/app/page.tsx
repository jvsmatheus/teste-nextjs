"use client";

import { getTasks } from "@/actions/get-task-from-db";
import EditTask from "@/components/custom/edit-task";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tasks } from "@/generated/prisma/client";
import {
  ArrowDownRight,
  Check,
  List,
  ListCheck,
  Plus,
  Sigma,
  Trash,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [taskList, setTaskList] = useState<Tasks[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  console.log(newTask);

  const handleGetTasks = async () => {
    try {
      const tasks = await getTasks();
      if (tasks) setTaskList(tasks);
    } catch (error) {
      throw error;
    }
  };

  const handleAddTask = async () => {
    
  }

  useEffect(() => {
    handleGetTasks();
  }, []);


  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa" onChange={(e) => setNewTask(e.target.value)}></Input>
          <Button className="cursor-pointer" onClick={handleAddTask}>
            <Plus />
            Cadastrar
          </Button>
        </CardHeader>

        <CardContent>
          <Separator className="mb-6" />
          <div className="flex gap-2">
            <Badge className="cursor-pointer" variant={"default"}>
              <List />
              Todas
            </Badge>
            <Badge className="cursor-pointer" variant={"outline"}>
              <ArrowDownRight />
              Não finalizados
            </Badge>
            <Badge className="cursor-pointer" variant={"outline"}>
              <Check />
              Concluído
            </Badge>
          </div>

          <div className="mt-4 border-b">
            {taskList.map((task) => (
              <div
                className="h-14 flex justify-between items-center border-t"
                key={task.id}
              >
                <div className="w-1 h-full bg-green-300"></div>
                <p className="flex-1 px-2 text-sm">{task.description}</p>
                <div className="flex gap-2 items-center">
                  <EditTask />

                  <Trash size={16} className="cursor-pointer" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListCheck size={18} />
              <p className="text-xs">Tarefas concluidas (3/3)</p>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  className="text-xs h-7 cursor-pointer"
                  variant={"outline"}
                >
                  <Trash /> Limpar tarefas concluidas
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Tem certeza que deseja excluir x itens?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Sim</AlertDialogAction>
                  <AlertDialogCancel>Não</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div
              className="h-full bg-blue-500 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="flex justify-end items-center mt-2 gap-2">
            <Sigma size={18} />
            <p className="text-xs">3 tarefas no total</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
