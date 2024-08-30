
const Navbar = () => {
  return (
    <>
    {/* Container */}
    <div className="flex justify-around border-solid border-2 bg-green-500">
        {/* Logo */}
        <div className="flex items-center">
            <p>Logo here</p>
        </div>

        {/* Search */}
        <div className="py-2">
            <input type="text"
            name=""
            id=""
            placeholder="Search"
            className="px-2 rounded-lg"
            />
        </div>

        {/* Add word */}
        <div className="flex items-center">
            <button className="border border-solid rounded-full font-bold w-6">+</button>
        </div>
    </div>


    </>
    
  )
}

export default Navbar