import { signIn , signOut ,useSession} from "next-auth/react";
import { Inter } from "next/font/google";
import { Button, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();
  console.log("session in index.tsx -->", session.data?.user);
  
  return (
    <div style={{height: 60, background: "white", padding: 10}}>
      {session.data && <div style={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant={"h4"} style={{color: "black"}}>
          {session.data.user?.name || session.data.user?.email}

        </Typography>
        <div>
          <Button variant={"contained"} onClick={() => signOut()}>Logout</Button>
        </div>
        </div>}
      {!session.data && <div style={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant={"h4"} style={{color: "black"}}>
          Coursera
        </Typography>
        <div>
          <Button variant={"contained"} onClick={() => signIn()}>Sign up</Button>
        </div>
      </div>}
    </div>
  );
}