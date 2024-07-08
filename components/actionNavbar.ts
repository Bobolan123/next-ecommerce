'use server'
 
import { redirect } from 'next/navigation'
 
export async function navigateAdmin() {
  redirect(`/admin`)
}

export async function actionLogout() {
  await fetch(`${process.env.API}/auth/logout`)
}