'use server'

import { getJwt } from "@/utils/utils"


export const getModule = async () => {
    const jwt = await getJwt()
    const res = await fetch('http://localhost:3001/api/v1/role/getModule',{
        headers:{
            Authorization: `Bearer ${jwt}`
        },
        method: "GET"
    })
    const modules = await res.json()
    return modules.data
}