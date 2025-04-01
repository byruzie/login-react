function ImageHero({url, justify}) {
    return (
        <div className="hidden lg:flex justify-center items-center h-screen w-screen p-6">
            <div style={{backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center', justifyContent: `${justify}`}} className="h-full w-full rounded-lg p-8 flex" >
                <div className="w-8 h-8 bg-white rounded-lg flex justify-center items-center font-bold">R</div>
            </div>
        </div>
    )
}

export default ImageHero