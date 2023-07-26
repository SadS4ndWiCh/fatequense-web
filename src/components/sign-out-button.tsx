'use client'

import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

import { Button } from './ui/button'

export function SignOutButton() {
  return (
    <Button
      variant="destructive"
      onClick={() =>
        signOut({ callbackUrl: `${window.location.origin}/login` })
      }
      className="w-full"
    >
      <LogOut className="mr-2 w-5 h-5" />
      <span>Sair</span>
    </Button>
  )
}
