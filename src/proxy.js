  import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { auth } from './lib/auth';
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
       headers: await headers() 
    })
    //  const isLogin = true;
    if(session){
        return NextResponse.next();
    }
    console.log(session, "sesion to okkkk")
  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ["/books/:path*", "/all-books/:allBookId+"],
}
