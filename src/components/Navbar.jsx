import { CiSearch } from "react-icons/ci"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    {/* Major container - should be fixed*/}
    <div className=""> 
      {/* Container */}
      <div className=
      "flex justify-around items-center sm: text-sm bg-green-300 border-2 border-solid py-2 shadow-lg">
          {/* Logo */}
          <div className="text-green-600">
              <p className="font-bold ">African Urban Dictionary</p>
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
              className="px-2 py-2 rounded-lg "
              />
          </div>

          {/* Add word */}
          <div className="flex items-center">
            <Link to="/new-word">
                <button 
                className="text-green-600 border-4 
                rounded-full font-bold text-lg p-2 sm: text-sm">
                  New +
                </button>
              </Link>
          </div>
      </div>
    </div>


    </>
    
  )
}

export default Navbar