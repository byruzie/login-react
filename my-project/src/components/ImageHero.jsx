function ImageHero() {
    return (
        <div className="hidden lg:flex justify-center items-center h-screen w-screen p-6">
            <div className="h-full w-full">
                <img className="h-full w-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1742325989789-b42912a531dd?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    )
}

export default ImageHero