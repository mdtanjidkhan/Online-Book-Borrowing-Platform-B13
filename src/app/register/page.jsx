'use client'
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();
           const [isShowPassword, setShowpassword] = useState(false);

    const handleRegister = async (data) => {  
        const {email,password,name,photo} = data;
        console.log(name, photo,email,password);

       const {data: res, error} = await authClient.signUp.email({
           name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/login",
       })
       console.log(res, error);
       if(error){
        alert(error.message);
       }
       if(res){
        alert('Signup successful');
       }
    };
   
    return (
        <div className='w-11/12 mx-auto min-h-[85vh] flex justify-center items-center bg-gray-400'>
            <div className='p-6 rounded-md bg-white mb-10'>
                <h2 className='font-bold text-2xl text-center'>Register your account</h2>
                <hr className='mt-4 text-gray-400' />
                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">
                        <label className="label mt-4 font-bold">Your Name</label>
                        <input minLength={'4'} type="text" className="input" placeholder="Enter your Name"
                            {...register("name", { required: "Name field is required" })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}

                        {/* Photto url */}
                        <label className="label mt-4 font-bold">Photo URL</label>
                        <input type="text" className="input" placeholder="Enter your Photo URL"
                            {...register("photo", { required: "Photo field is required" })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                        <label className="label mt-4 font-bold">Email</label>
                        <input type="email" className="input" placeholder="Enter your email address"
                            {...register("email", { required: "Email field is required" })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                        <label className="label font-bold">Password</label>
                        {/* Password */}
                        <div className='relative'>
                             <input minLength={'8'} type={isShowPassword ? "text": "password"} className="input" placeholder="Enter your password"
                            {...register("password", { required: "Password field is required" })}
                        />
                          <span className='absolute right-2 top-3 cursor-pointer' onClick={()=> setShowpassword(!isShowPassword)}>{isShowPassword ? <FaEye ></FaEye> :<FaEyeSlash></FaEyeSlash> }</span>
                        </div>
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>

            </div>
        </div>
    );
};

export default RegisterPage;