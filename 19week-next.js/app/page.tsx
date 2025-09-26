import Link from "next/link";

export default function Home(){
  return(
    <div className=" h-screen w-screen flex items-center justify-center text-2xl">
     <div className="flex flex-col">
      To Application
     <Link href='/signup'>Signup</Link>
     <Link href='signin'>Signin</Link>
     </div>
    </div>
  )
}

