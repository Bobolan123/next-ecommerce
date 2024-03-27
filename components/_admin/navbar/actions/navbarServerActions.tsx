'use server'

import { getJwt } from "@/components/actions/serverActionAll"

export const getModule = async () => {
    const jwt = await getJwt()
    const res = await fetch('http://localhost:3001/api/role/getModule',{
        headers:{
            Authorization: `Bearer ${jwt?.value}`
        },
        method: "GET"
    })
    const modules:string[] = await res.json()
    return modules
}