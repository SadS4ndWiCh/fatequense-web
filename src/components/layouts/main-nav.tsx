'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { studentConfig } from '~/config/student'

import { cn } from '~/lib/utils'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="hidden flex-col items-center pt-6 gap-2 md:flex">
      {studentConfig.sidebar.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'w-full flex items-center gap-2 rounded-md p-4 hover:bg-zinc-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-zinc-50',
            {
              'bg-zinc-50 text-gray-600 dark:bg-gray-800 dark:text-zinc-50':
                pathname === link.href,
            },
          )}
          title={link.label}
        >
          <link.icon className="h-5 w-5" />
          <span className="sr-only">{link.label}</span>
        </Link>
      ))}
    </div>
  )
}
