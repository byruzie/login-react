import ImageHero from "../components/ImageHero"
import SignUpForm from "../components/SignUpForm"

function SignUp() {
    return(
        <div className="flex-col lg:flex flex-row">
            <ImageHero url={"https://images.unsplash.com/photo-1742084109094-be5f3419d53b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <SignUpForm />
        </div>
    )
}

export default SignUp