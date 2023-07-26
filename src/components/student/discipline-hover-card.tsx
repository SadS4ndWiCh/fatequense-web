import { Watch } from 'lucide-react'
import { StudentScheduleLesson } from '~/types'

import { cn } from '~/lib/utils'

import { buttonVariants } from '../ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'

type Props = {
  lesson?: StudentScheduleLesson
}

export function DisciplineHoverCard({ lesson }: Props) {
  if (!lesson) return null

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className={cn(buttonVariants({ variant: 'link' }))}>
          {lesson.cod}
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 text-left">
        <small>{lesson.cod}</small>
        <h4>{lesson.discipline?.name}</h4>

        <div className="mt-2 flex items-center">
          <Watch className="mr-2 h-4 w-4" />
          <span>{lesson.discipline?.hoursPerLesson} aulas p/ semana</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}