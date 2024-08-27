"use client"
import UserContext from '@/context/user-context'
import './globals.css'
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link';
import Info from '../components/info';

export default function Home() {
   const { addUser, checkAuth, setCheckisAuth }: any = useContext(UserContext);
   console.log(addUser);
   const changePath = () => {
      setCheckisAuth(!checkAuth)
   }
   return (
      <>
         <div className='row mx-1 my-2'>
         <div onClick={changePath} className="card col-3 mx-2 text-center" style={{ width: "18rem", height: "14rem", cursor: "pointer" }}>
                     <div className="card-body">
                        <h1 className="card-title">
                        +
                        </h1>
                        <h5>Add student</h5>
                     </div>
               </div>
         {
            addUser.map((user: any) => (
               <div key={user.id} className="card col-3 mx-2 my-2" style={{ width: "18rem", height: "14rem" }}>
                     <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <Link href={`/{${user.name}} {${user.rollNumber}} {${user.subject}} {${user.section}}`}>see details</Link>
                     </div>
               </div>
               // <h4 key={user.id}>{user.name} </h4>
            ))
         }
         </div>
         {checkAuth ? <Info /> : ""}
      </>
   )
}