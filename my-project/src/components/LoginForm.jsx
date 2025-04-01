function LoginForm() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="w-md flex flex-col 2xl:w-xl">
                <div>
                    <h1 className="font-semibold text-xl">Welcome</h1>
                    <h4>Please enter your details!</h4>
                </div>            
                <div className="mt-4">
                    <button className="w-full flex justify-center items-center border rounded-md p-1 font-semibold cursor-pointer"><img className="size-5 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" />Login with Google</button>
                </div>
                <div className="mt-8">
                    <div className="flex flex-col">
                        <input className="border border-gray-400 rounded-md pl-2 py-1" type="text" name="Email" id="" placeholder="Email" />
                        <input className="border border-gray-400 rounded-md mt-4 pl-2 py-1" type="text" name="Password" id="" placeholder="Password" />
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
                        <div className="flex mt-2">
                            <p className="text-gray-400">Don't have an account?<a className="ml-1 font-semibold underline text-gray-900" href="signup">Sign up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm