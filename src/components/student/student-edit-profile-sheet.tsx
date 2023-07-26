import { notFound } from 'next/navigation'

import { Settings2 } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'

import { EditProfileForm } from '../forms/edit-profile-form'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export async function StudentEditProfileSheet() {
  const user = await getCurrentUser()

  if (!user) return notFound()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" className="w-full">
          <Settings2 className="mr-2 h-4 w-4" />
          <span>Editar Perfil</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Editar Perfil</SheetTitle>
          <SheetDescription>
            Atualize seus dados de perfil, como seu avatar
          </SheetDescription>
        </SheetHeader>

        <EditProfileForm user={user} />
      </SheetContent>
    </Sheet>
  )
}
