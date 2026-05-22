'use client';
import { authClient } from '@/lib/auth-client';
import { assertRootParamInSamples } from 'next/dist/server/app-render/instant-validation/instant-samples';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BsGoogle } from 'react-icons/bs';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    //    ai vabe korle name deoya lagbo na
    const {
        register,
        handleSubmit,
        watch,
        formState:{errors}} = useForm();
        
         const [isShowPassword, setShowpassword] = useState(false);

    const handleLog = async (data)=>{
     const {email, password} = data;
        console.log(data)
        const { data: res, error } = await authClient.signIn.email({
    email: email,
    password: password,
    rememberMe: true,
    callbackURL: "/",
});
   console.log(res, error);
  }  
//   social provider with Google
  const handlegoogle = async ()=>{
     const data = await authClient.signIn.social({
    provider: "google",
  });
  }
 
    return (
        <div className='w-11/12 mx-auto min-h-[80vh] flex justify-center items-center bg-gray-300'>
            <div className='p-6 rounded-md bg-white mb-10'>
               <h2 className='font-bold text-2xl text-center'>Login your account</h2>
               <hr className='mt-4 text-gray-400' />
               <form onSubmit={handleSubmit(handleLog)}>
                  <fieldset className="fieldset">
          <label className="label mt-4 font-bold">Email</label>
          <input  type="email" className="input" placeholder="Enter your email address"
          {...register("email",{required:"Email field is required"})}
          />
         {errors.email && <p>{errors.email.message}</p>}
          <label className="label font-bold">Password</label>
          {/* Password */}
          <div className=' relative'>
          <input type={isShowPassword ?"text": "password"} className="input" placeholder="Enter your password"
          {...register("password",{required:"Password field is required"})}
          />
           <span className='absolute right-2 top-3 cursor-pointer' onClick={()=> setShowpassword(!isShowPassword)}>{isShowPassword ? <FaEye ></FaEye> :<FaEyeSlash></FaEyeSlash> }</span>
           </div>
          {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
               </form> 
                  <div className="flex w-full flex-col">
         <div className="divider">OR</div>
            </div>
             <div className=''>
                <button className='flex gap-1 items-center w-full btn btn-neutral' onClick={handlegoogle}><BsGoogle></BsGoogle> Login with Google</button>
             </div>

              <p className='mt-3 font-medium'>Dont’t Have An Account ? <Link className='text-blue-700' href={'/register'}>Register</Link></p>

            </div>
        </div>
    );
};

export default LoginPage;