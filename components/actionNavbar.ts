'use server'
 
import { getJwt } from '@/utils/utils'
import { redirect } from 'next/navigation'
 
export async function navigateAdmin() {
  redirect(`/admin`)
}

export async function actionLogout() {
  const jwt = await getJwt()
  const res = await fetch(`${process.env.API}/auth/logout`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
    method: "GET"
  })
  return res
}