'use client'

import { useEffect } from 'react'

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="w-full h-full grid place-content-center gap-4 text-center">
      <h2 className="text-3xl font-bold">Alguma coisa deu errado!</h2>
      <p>Recarregue a página e tente novamente</p>
    </div>
  )
}
