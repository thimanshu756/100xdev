import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { Signup } from "@repo/ui/Signup";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    Hello world
    <Signup onclick={
        async (email,password)=>{
        const response= await axios.post("/api/auth/signup",{
            email,
            password
        });
        localStorage.setItem("token",response.data.token);
        alert("signin completed successfully")
    }}/>
    </>
  );
}
// look week 10 repo