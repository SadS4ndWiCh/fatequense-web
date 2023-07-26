import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { env } from '~/env.mjs'

import { authOptions } from '~/lib/auth'
import { editProfileSchema } from '~/lib/validations/profile'

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) return new Response(null, { status: 403 })

    const body = await req.json()
    const payload = editProfileSchema.parse(body)

    await fetch(
      new URL('/student/profile/edit', env.NEXT_PUBLIC_API_BASE_URL),
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: session.user.accessToken,
        },
        body: JSON.stringify(payload),
      },
    )

    return new Response(null, { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response(JSON.stringify(err.issues), { status: 422 })
    }

    console.log(err)
    return new Response(null, { status: 500 })
  }
}
