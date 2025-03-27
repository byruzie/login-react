function SignUpForm() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="w-md flex flex-col 2xl:w-xl">
                <div className="flex">
                    <div className="w-full flex flex-col">
                        <label htmlFor="">First Name</label>
                        <input className="border rounded-md pl-2 py-1" type="text" placeholder="First Name" />
                    </div>
                    <div className="w-full ml-2 flex flex-col">
                        <label>Last Name</label>
                        <input className="border rounded-md pl-2 py-1" type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input className="border rounded-md pl-2 py-1" type="text" placeholder="Email" />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="">Password</label>
                        <input className="border rounded-md pl-2 py-1" type="text" placeholder="Password" />
                    </div>
                    <div className="mt-6">
                        <button className="w-full bg-black text-white rounded-md p-1 font-semibold cursor-pointer">Create account</button>
                        <p className="mt-2 text-gray-400">Already have an account?<a className="ml-1 font-semibold underline text-gray-900" href="/">Login</a></p>
                    </div>
                </div>
                <div className="mt-12">
                    <div className="w-full">
                        <h4 className="text-center text-gray-400">or continue with</h4>
                        <button className="w-full border rounded-md p-1 font-semibold cursor-pointer mt-2">Login with Google</button>
                        <p className="mt-2 text-center text-gray-400">By continuing you agree to <a className="font-semibold text-gray-900" href="#">Terms of Service</a> and <a className="font-semibold text-gray-900" href="">Privacy Police</a></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUpForm