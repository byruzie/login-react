function ImageHero({url}) {
    return (
        <div className="hidden lg:flex justify-center items-center h-screen w-screen p-6">
            <div className="h-full w-full">
                <img className="h-full w-full object-cover rounded-lg" src={url} alt="" />
            </div>
        </div>
    )
}

export default ImageHero