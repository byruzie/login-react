function LoginForm() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="w-md flex flex-col 2xl:w-xl">
                <div>
                    <h1 className="font-semibold text-xl">Welcome</h1>
                    <h4>Please enter your details!</h4>
                </div>            
                <div className="mt-4">
                    <button className="w-full border rounded-md p-1 font-semibold cursor-pointer">Login with Google</button>
                </div>
                <div className="mt-8">
                    <div className="flex flex-col">
                        <input className="border rounded-md pl-2 py-1" type="text" name="Email" id="" placeholder="Email" />
                        <input className="border rounded-md mt-4 pl-2 py-1" type="text" name="Password" id="" placeholder="Password" />
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="flex items-center">
                            <input className="size-4 accent-gray-950 cursor-pointer" type="checkbox" />
                            <h4 className="ml-2">Remember me</h4>
                        </div>
                        <a className="font-semibold underline" href="#">Forgot password</a>
                    </div>
                    <div className="mt-8">
                        <button className="w-full bg-black text-white rounded-md p-1 font-semibold cursor-pointer">Log In</button>
                        <div className="flex mt-4">
                            <p>Don't have an account?</p>
                            <a className="ml-1 font-semibold underline" href="signup">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm