import { notFound } from 'next/navigation'

import { AlertCircle, Settings2 } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'

import { Button } from '~/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer'

import { EditProfileForm } from '../forms/edit-profile-form'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'

export async function MobileStudentEditProfile() {
  const user = await getCurrentUser()

  if (!user) notFound()

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>
          <Settings2 className="mr-2 w-4 h-4" />
          <span>Editar Perfil</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="space-y-4 min-h-[35vh]">
        <DrawerHeader>
          <DrawerTitle>Editar Perfil</DrawerTitle>
          <DrawerDescription>
            Atualize suas informações de perfil, como o avatar
          </DrawerDescription>
        </DrawerHeader>

        <EditProfileForm user={user} />

        <DrawerFooter>
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
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
