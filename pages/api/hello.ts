// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    res.status(200).json({ name: "This is protected content. You can access this content because you are signed in.", })

  } else {
    res.status(200).json({
      name: "You must be signed in to view the protected content on this page.",
    })
  }
}
