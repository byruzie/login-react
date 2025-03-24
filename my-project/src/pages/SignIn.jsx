import ImageHero from "../components/ImageHero"
import LoginForm from "../components/LoginForm"

function SignIn() {
    return(
        <div className="flex-col lg:flex flex-row">
            <LoginForm />
            <ImageHero />
        </div>
    )
}

export default SignIn