"use client"

import { useRouter } from 'next/navigation'
import React from 'react'



export default function page() {

    const router = useRouter()
    return (
        <>

            <h1>mamura sector 66</h1>

            <div onClick={() => router.back()}>go back</div>


        </>
    )
}
