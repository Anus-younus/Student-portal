"use client"

import { useEffect, useState } from "react"
import UserContext from "./user-context"

const users: any = [
    {
        id: "%7BAnus%7D%20%7B202344%7D%20%7BWeb-App-Dev%7D%20%7BG%7D",
        name: "Anus",
        rollNumber: 202344,
        section: "G",
        subject: "Web-App-Dev"
    },
    {
        id: "%7BOwais%7D%20%7B12112%7D%20%7BFluter-app-Dev%7D%20%7BG%7D",
        name: "Owais",
        rollNumber: 12112,
        section: "G",
        subject: "Fluter-app-Dev"
    },
    {
        id: "%7BManan%7D%20%7B333302%7D%20%7BAI-chatbot%7D%20%7BF%7D",
        name: "Manan",
        rollNumber: 333302,
        section: "F",
        subject: "AI-chatbot"
    }
]

export default function UserProvider({ children }: { children: React.ReactNode }) {
    const [addUser, setAddUser] = useState<any>(users)
    let [status, setStatus] = useState(true)
    const [checkAuth, setCheckisAuth] = useState(false)
    return (
        <UserContext.Provider value={{ addUser, setAddUser, status, setStatus, checkAuth, setCheckisAuth }}>
            {children}
        </UserContext.Provider>
    )
}