"use client";

import { ReactNode } from "react";

// interface ButtonProps {
//   children: ReactNode;
//   className?: string;
//   appName: string;
// }

export const Signin = () => {
  return (
    <div>
    signin page
    <input type="text" placeholder="email" ></input>
     <input type="text" placeholder="password" ></input>
     <button>Submit</button>
    </div>
  );
};
