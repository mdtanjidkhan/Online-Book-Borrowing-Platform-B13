"use client"
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';

const UpdataProfile = () => {
     const {
         register,
         handleSubmit,
         watch,
          formState:{errors}} = useForm();
     const handleUpdate =async (data) => {
        const {name, photo} = data;
        console.log(data)
        const {data: res, error} = await authClient.user.update({
           name:name,
           image: photo, 
            callbackURL:"/profile" 
        })
        console.log(res, error)
     }

    return (
        <div>
           <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Update Profile</h2>
      <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-750">Your Name</label>
          <input
            type="text"
            className="mt-1 block w-full p-2.5 border rounded-lg"
            placeholder="Enter Your name"
            {...register("name", { required: "Name field is required" })}

          />
           {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-750">Profile Image URL</label>
          <input
            type="text"
            className="mt-1 block w-full p-2.5 border rounded-lg"
            placeholder="Enter Your Photo URL"
            {...register("photo", { required: "Photo field is required" })}
          />
        </div>

        <button
          className="w-full bg-indigo-600 text-white p-2.5 rounded-lg hover:bg-indigo-700 transition"
        >
         Update
        </button>
      </form>
    </div>
        </div>
    );
};

export default UpdataProfile;