import { AlertCircle, Settings2 } from 'lucide-react'
import { Session } from 'next-auth'

import { EditProfileForm } from '../forms/edit-profile-form'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

type Props = {
  user: Session['user']
}

export async function StudentEditProfileSheet({ user }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" className="w-full">
          <Settings2 className="mr-2 h-4 w-4" />
          <span>Editar Perfil</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="space-y-4">
        <SheetHeader>
          <SheetTitle>Editar Perfil</SheetTitle>
          <SheetDescription>
            Atualize seus dados de perfil, como seu avatar
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
