"use client"

import { useEffect, useState } from "react"

export default function UserInfo({ addOne }: any) {
    const [name, setName] = useState('')
    const [rollNumber, setRollNumber] = useState('')
    const [subject, setSubject] = useState('')
    const [section, setSection] = useState('')
    const submit = (e: any) => {
        e.preventDefault()
        let user = {
            id: `%7B${name}%7D%20%7B${rollNumber}%7D%20%7B${subject}%7D%20%7B${section}%7D`,
            name: name,
            rollNumber: rollNumber,
            section: section,
            subject: subject
        }
        addOne(user)
    }
    return (
        <>
            <form onSubmit={submit} style={{ margin: "0 auto" }}>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Student</label>
                    <input
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        type="text"
                        className="form-control"
                        id="text"
                        aria-describedby="text"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Roll number</label>
                    <input
                        value={rollNumber}
                        onChange={(e) => { setRollNumber(e.target.value) }}
                        type="text"
                        className="form-control"
                        id="text"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Section</label>
                    <input
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        type="text"
                        className="form-control"
                        id="text"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Subject</label>
                    <input
                        value={section}
                        onChange={(e) => { setSection(e.target.value) }}
                        type="text"
                        className="form-control"
                        id="text"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </>
    )
}