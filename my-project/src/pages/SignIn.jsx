import ImageHero from "../components/ImageHero"
import LoginForm from "../components/LoginForm"

function SignIn() {
    return(
        <div className="flex-col lg:flex flex-row">
            <ImageHero url={"https://images.unsplash.com/photo-1742201835826-3b607fa4e8b2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} justify={"start"} />
            <LoginForm />

        </div>
    )
}

export default SignIn