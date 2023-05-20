import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import { cn } from '~/lib/utils';

import { buttonVariants } from '~/components/ui/button';

export default function NotFound() {
  return (
    <div className="w-screen min-h-screen grid place-items-center">
      <div className="text-center">
        <div className="mb-20">
          <h2 className="relative text-3xl font-medium z-10 before:absolute before:content-['404'] before:text-9xl before:font-bold before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-zinc-100 before:-z-10">
            Página não entrada
          </h2>
        </div>

        <Link
          href="/login"
          className={cn(buttonVariants({ variant: 'ghost' }))}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Voltar</span>
        </Link>
      </div>
    </div>
  );
}
