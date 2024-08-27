"use client"

import { useContext, useEffect } from 'react'
import '../app/Bootstrap.css'

import UserInfo from "@/components/user-info"
import UserContext from '@/context/user-context'
import { useRouter } from 'next/navigation'

export default function Info() {
    const router = useRouter()
    const { addUser, setAddUser, status, setCheckisAuth }: any = useContext(UserContext);
    useEffect(() => {
        if (status) {
            router.push('/')
        }
        else {
            router.push('/info')
        }
    }, [status])
    const addOne = (newUser: any) => {
        let clAddUser = [...addUser, newUser]
        setAddUser([...clAddUser])
        setCheckisAuth(false)
    }
    return (
        <>
            <div className="container mx-3 my-3">
                <UserInfo addOne={addOne} />
            </div>
        </>
    )
}