'use client'
import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Navbar = () => {
   
  const { data: session, isPending } = authClient.useSession();
   const user = session?.user;
  const pathname = usePathname()

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li><Link href={'/'} className={pathname=== "/" ? "text-blue-600":""}>Home</Link></li>
      <li><Link href={'/all-books'} className={pathname=== "/all-books" ? "text-blue-600":""}>All Books</Link></li>
      <li><Link href={'/profile'}>My Profile</Link></li>
      </ul>
    </div>
     <Link href={"/"}>
       <img className="w-15 h-15" src="https://i.ibb.co.com/8LwhqY3W/logo-book.png" alt="book.logo" />
     </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="font-bold"><Link href={'/'} className={pathname=== "/" ? "text-blue-600":""}>Home</Link></li>
      <li className="font-bold"><Link href={'/all-books'} className={pathname=== "/all-books" ? "text-blue-600":""}>All Books</Link></li>
      <li className="font-bold"><Link href={'/profile'}>My Profile</Link></li>
    </ul>
  </div>
  <div className="navbar-end mx-2">
     {isPending ? "loading..." : session ? (<div>
       <h2>Hello, {session?.user?.name}</h2>
        <button onClick={async()=> await authClient.signOut()} className="btn bg-purple-500">LogOut</button>
     </div>) :(<Link className="btn bg-purple-600" href={"/login"}>Login</Link>)}
    
  </div>
</div>
    );
};

export default Navbar;