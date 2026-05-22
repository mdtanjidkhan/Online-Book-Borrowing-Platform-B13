"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const myProfilePage = () => {

     const {data: session, isPending } = authClient.useSession();
      const user = session?.user;
    return (
        <div className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        
        <div className="h-32 bg-gradient-to-r stream bg-blue-600 to-indigo-700 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold tracking-wide">My Profile</h2>
        </div>
        <div className="p-6 relative pt-14">
          
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-500 border-4 border-white rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-md">
       {user?.image ? (
      <img 
      src={user.image} 
      alt={user.name || "User Profile"} 
      className="w-full h-full object-cover" 
    />
  ) : ( 
    
    <span>{user?.name ? user.name[0].toUpperCase() : "U"}</span>
  )}
          </div>
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl font-bold text-gray-800">{user?.name || "No Name"}</h3>
            <p className="text-sm text-gray-500 bg-gray-100 inline-block px-3 py-1 rounded-full">
              {session?.user?.email}
            </p>
          </div>

          <hr className="border-gray-100 my-4" />
          <div className="grid grid-cols-2 gap-4 text-center my-6">
            <div className="p-3 bg-blue-50 rounded-xl">
              <span className="block text-xs text-gray-500 uppercase font-semibold">Role</span>
              <span className="text-sm font-bold text-blue-700">{user?.role || "User"}</span>
            </div>
            <div className="p-3 bg-green-50 rounded-xl">
              <span className="block text-xs text-gray-500 uppercase font-semibold">Status</span>
              <span className="text-sm font-bold text-green-700">Active</span>
            </div>
          </div>
          <div className="mt-6">
            <Link 
              href="/profile/update" 
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 shadow-lg shadow-blue-100"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default myProfilePage;