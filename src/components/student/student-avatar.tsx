import { AvatarProps } from '@radix-ui/react-avatar'
import type { Session } from 'next-auth'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type Props = AvatarProps & {
  student: Pick<Session['user'], 'name' | 'picture'>
}

export function StudentAvatar({ student, ...rest }: Props) {
  return (
    <Avatar {...rest}>
      <AvatarImage src={student.picture} alt={student.name} />
      <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
    </Avatar>
  )
}
