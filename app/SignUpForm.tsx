// components/SignupForm.js
"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";


const SignupForm = () => {

    const[userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
    });

    const {name, email, password} = userInfo;

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const {name, value } = target;

        setUserInfo({ ...userInfo, [name]: value});
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const res = await fetch("/api", {
            method: "POST",
            body: JSON.stringify(userInfo),
        }).then((res) => res.json());
        console.log(res);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form className="space-y-6" action="#">
                    <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1" placeholder="Full Name" value={name} onChange={handleChange}/>
                    <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1" placeholder="Email" value={email} onChange={handleChange}/>
                    <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1" placeholder="Password" value={password} onChange={handleChange}/>
                    <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Sign Up</button>
                </form>
            </div>
        </div>
    );
};
export default SignupForm;
