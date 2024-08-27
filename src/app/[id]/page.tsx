"use client"

import UserContext from "@/context/user-context";
import { useContext, useEffect, useState } from "react"
import '../Bootstrap.css'

export default function StudentDetails({ params: { id } }: any) {
    const [newUser, setNewUser] = useState<any>({})
    const { addUser }: any = useContext(UserContext)
    useEffect(() => {
        addUser.map((user: any) => {
            user.id === id ?
            setNewUser(user)
            :
            ""
        })
    }, [newUser])
    return (
        <>
            {
                <div className="mx-2 my-2">
                    <table style={{margin: "0 auto"}}>
                    <tr>
                        <td style={{ border: "1px solid black", padding: "20px" }}>name</td>
                        <td style={{ border: "1px solid black", padding: "20px" }}> {newUser.name}</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", padding: "20px" }}>Roll number</td>
                        <td style={{ border: "1px solid black", padding: "20px" }}> {newUser.rollNumber}</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", padding: "20px" }}>section</td>
                        <td style={{ border: "1px solid black", padding: "20px" }}> {newUser.section}</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", padding: "20px" }}>subject</td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>{newUser.subject}</td>
                    </tr>
                </table>
                </div>
            }
        </>
    )
}