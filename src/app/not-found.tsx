import Link from 'next/link'

import { ArrowLeft } from 'lucide-react'

import { cn } from '~/lib/utils'

import { buttonVariants } from '~/components/ui/button'

export default function NotFound() {
  return (
    <div className="grid min-h-screen w-screen place-items-center">
      <div className="text-center">
        <div className="mb-20">
          <h2 className="relative z-10 text-3xl font-medium before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:-translate-x-1/2 before:-translate-y-1/2 before:text-9xl before:font-bold before:text-zinc-100 before:content-['404'] dark:before:text-gray-800">
            Página não entrada
          </h2>
        </div>

        <Link
          href="/login"
          className={cn(buttonVariants({ variant: 'ghost' }))}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Voltar</span>
        </Link>
      </div>
    </div>
  )
}
