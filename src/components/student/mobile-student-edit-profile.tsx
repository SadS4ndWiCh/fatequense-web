import { AlertCircle, Settings2 } from 'lucide-react'
import { Session } from 'next-auth'

import { Button } from '~/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet'

import { EditProfileForm } from '../forms/edit-profile-form'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'

type Props = {
  user: Session['user']
}

export async function MobileStudentEditProfile({ user }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full">
          <Settings2 className="mr-2 w-4 h-4" />
          <span>Editar Perfil</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="space-y-4">
        <SheetHeader>
          <SheetTitle>Editar Perfil</SheetTitle>
          <SheetDescription>
            Atualize suas informações de perfil, como o avatar
          </SheetDescription>
        </SheetHeader>

        <EditProfileForm user={user} />

        <SheetFooter>
          <Alert className="mt-4">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle>Atenção</AlertTitle>
            <AlertDescription>
              As informações realizadas aqui não possuem efeito no site do SIGA
              verdadeiro. As modificações aqui são salvas em um banco de dados a
              parte do SIGA, portanto, evite colocar qualquer informação
              sensível.
            </AlertDescription>
          </Alert>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
