'use server'

import { getJwt } from "@/utils/utils"


export const getModule = async () => {
    const jwt = await getJwt()
    const res = await fetch(`${process.env.API}/auth/profile`,{
        headers:{
            Authorization: `Bearer ${jwt}`
        },
        method: "GET"
    })
    const modules = await res.json()
    return modules.data
}