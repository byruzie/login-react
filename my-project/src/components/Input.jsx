function Input({label, placeholder, mr, type}) {
    return (
        <div className="w-full flex flex-col mb-2" style={{ marginRight:`${mr}` }}>
            <label htmlFor="">{label}</label>
            <input className="border border-gray-400 rounded-md pl-2 py-1 mt-1 focus:outline-none focus:border-gray-900" type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input