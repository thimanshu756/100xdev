"use client";

import { ReactNode } from "react";
import{useState} from "react"

export const Signup = (props:{
    onclick:(username:string , password:string)=>void
}) => {
    const [email , setEmail]= useState("")
    const [password , setPassword]=useState("")
    return (
    <div>
    <input type="text" placeholder="email" onChange={(e)=>{
        setEmail(e.target.value)
    }} ></input>
     <input type="text" placeholder="password" onChange={(e)=>{
        setPassword(e.target.value)
    }} ></input>
     <button onClick={async()=>{
        props.onclick(email,password)
     }}>Submit</button>
    </div>
    );
  };