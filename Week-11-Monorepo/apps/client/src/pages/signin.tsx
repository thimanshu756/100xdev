import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { Signin } from "@repo/ui/signin";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    Hello world
    <Signin/>
    </>
  );
}
// look week 10 repo