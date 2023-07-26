import { notFound } from 'next/navigation'

import { Settings2 } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'

import { Button } from '~/components/ui/button'
import {
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from '~/components/ui/drawer'

import { EditProfileForm } from '../forms/edit-profile-form'

export async function MobileStudentEditProfile() {
  const user = await getCurrentUser()

  if (!user) notFound()

  return (
    <DrawerRoot>
      <DrawerTrigger asChild>
        <Button>
          <Settings2 className="mr-2 w-4 h-4" />
          <span>Editar Perfil</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="min-h-[35vh]">
        <EditProfileForm user={user} />
      </DrawerContent>
    </DrawerRoot>
  )
}
