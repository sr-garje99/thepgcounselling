"use client"
import Image from "next/image";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    
    <>
    <div style={{ width: '70%', float: 'left' }}>
     <Image 
     src="/login.jpg"
     alt="login image"
     width={800}
     height={300}
     />
     </div>
     <div style={{ width: '30%',height:'90%', float: 'right',display:'flex' }}>
     <LoginForm/>
     </div>
    </>
  );
}