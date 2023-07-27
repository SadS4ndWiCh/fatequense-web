import { BookOpen } from 'lucide-react'

import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { StudentTodaySchedule } from './student-today-schedule'

export async function MobileStudentTodaySchedule() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <BookOpen className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="flex flex-col">
          <SheetHeader>
            <SheetTitle>Aulas de hoje</SheetTitle>
            <SheetDescription>
              Veja os horários de aula de hoje
            </SheetDescription>
          </SheetHeader>

          <ScrollArea className="flex-1 my-8">
            <StudentTodaySchedule />
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  )
}
