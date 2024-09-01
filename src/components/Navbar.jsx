import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
    {/* Major container - should be fixed*/}
    <div className="py-2"> 
      {/* Container */}
      <div className=" flex justify-around ">
          {/* Logo */}
          <div className="flex items-center text-white">
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
              <button className="border border-solid rounded-full font-bold w-6 text-lg text-white">
                +
              </button>
          </div>
      </div>
    </div>


    </>
    
  )
}

export default Navbar