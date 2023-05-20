import { Watch } from 'lucide-react';

import { cn } from '~/lib/utils';
import { Lesson } from '~/lib/validators/schedule';

import { buttonVariants } from './ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

type Props = {
  lesson?: Lesson;
};

export function DisciplineHoverCard({ lesson }: Props) {
  if (!lesson) return null;

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className={cn(buttonVariants({ variant: 'link' }))}>
          {lesson.cod}
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div>
          <small>{lesson.cod}</small>
          <h4>{lesson.discipline.name}</h4>

          <div className="flex items-center mt-2">
            <Watch className="w-4 h-4 mr-2" />{' '}
            <span>{lesson.discipline.hoursPerLesson} aulas p/ semana</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
