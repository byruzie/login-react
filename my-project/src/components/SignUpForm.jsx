import Input from "./Input"

function SignUpForm() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="w-md flex flex-col 2xl:w-xl">
                <div>
                    <h1 className="font-semibold text-xl">Welcome</h1>
                    <h4>Please enter your details!</h4>
                </div> 
                <div className="flex mt-4">
                    <Input label={'First Name'} placeholder={'Enter your first name'} mr={'15px'} />
                    <Input label={'Last Name'} placeholder={'Enter your last name'} />
                </div>
                <div>
                    <Input label={'Email'} placeholder={'Enter your email'} />
                    <Input label={'Password'} placeholder={'Enter your password'} />
                    <Input label={'Confirm Password'} placeholder={'Confirm your password'} />
                </div>
                <div className="mt-4">
                    <button className="w-full bg-black text-white rounded-md p-1 font-semibold cursor-pointer">Create account</button>
                    <p className="mt-2 text-gray-400">Already have an account?<a className="ml-1 font-semibold underline text-gray-900" href="/">Login</a></p>
                </div>
                <div className="mt-12">
                    <div className="w-full">
                        <h4 className="text-center text-gray-400">or continue with</h4>
                        <button className="w-full flex justify-center items-center border rounded-md p-1 font-semibold cursor-pointer mt-2"><img className="size-5 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" />Login with Google</button>
                        <h4 className="mt-2 text-center text-gray-400">By continuing you agree to <a className="font-semibold text-gray-900" href="">Terms of Service</a> and <a className="font-semibold text-gray-900" href="">Privacy Police</a></h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUpForm