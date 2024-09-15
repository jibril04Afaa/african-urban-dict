import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
    {/* Major container - should be fixed*/}
    <div className=""> 
      {/* Container */}
      <div className="bg-green-300 border-2 border-solid py-2 flex justify-around shadow-lg">
          {/* Logo */}
          <div className="flex items-center text-green-600">
              <p>AUB</p>
          </div>

          {/* Search */}
          <div className="flex justify-around items-center rounded-lg">

              {/* <CiSearch
              className="font-2xl text-white"
              /> */}

              <input type="text"
              name=""
              id=""
              placeholder="Search"
              className="px-2 py-2 rounded-lg"
              />
          </div>

          {/* Add word */}
          <div className="flex items-center">
              <button className="text-green-600 border border-solid rounded-full font-bold w-6 text-lg ">
                +
              </button>
          </div>
      </div>
    </div>


    </>
    
  )
}

export default Navbar