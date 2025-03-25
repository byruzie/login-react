import ImageHero from "../components/ImageHero"
import SignUpForm from "../components/SignUpForm"

function SignUp() {
    return(
        <div className="flex-col lg:flex flex-row">
            <ImageHero />
            <SignUpForm />
        </div>
    )
}

export default SignUp