function ImageHero({url, justify}) {
    return (
        <div className="hidden lg:flex justify-center items-center h-screen w-screen p-6">
            <div style={{backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center', justifyContent: `${justify}`}} className="h-full w-full rounded-lg p-8 flex" >
                <div className="w-10 h-10 bg-white rounded-lg flex justify-center items-center">
                    <div className="w-7 h-7 border-2 rounded-full flex justify-center items-center text-sm font-bold">Я</div>
                </div>
            </div>
        </div>
    )
}

export default ImageHero