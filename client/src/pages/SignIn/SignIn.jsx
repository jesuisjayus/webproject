import React from "react";

const SignIn = () => {
    return (
        <div>
            <form className="bg-gray-200 flex flex-col px-8 py-12 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
                <h2 className="text-3xl font-bold text-center">
                    Sign in to your account
                </h2>
                <input type="text" placeholder="Username" className="text-xl px-4 py-2 rounded-full"/>
                <input type="password" placeholder="Password" className="text-xl px-4 py-2 rounded-full"/>
                <button className="bg-blue-500 text-white text-xl px-4 py-2 rounded-full">SignIn</button>
            </form>
            <form className="bg-gray-200 flex flex-col px-8 py-12 rounded-lg w-8/12 md:w-6/12 mx-auto my-10 gap-10">
                <p className="mx-auto">Don't have any account?</p>
                <h2 className="text-3xl font-bold text-center">
                    Create an account
                </h2>
                <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Firstname" className="text-xl px-4 py-2 rounded-full"/>
                <input type="text" placeholder="Lastname" className="text-xl px-4 py-2 rounded-full"/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Username" className="text-xl px-4 py-2 rounded-full"/>
                <input type="text" placeholder="Email" className="text-xl px-4 py-2 rounded-full"/>
                </div>
                <input type="password" placeholder="Password" className="text-xl px-4 py-2 rounded-full"/>
                <button className="bg-blue-500 text-white text-xl px-4 py-2 rounded-full">SignUp</button>

            </form>
        </div>
        );
};

export default SignIn;