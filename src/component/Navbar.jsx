import logo from "../assets/docs-logo.png";
import { GrStarOutline, GrStar } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineLock } from "react-icons/ai";
import { TextEditor } from "./";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  function toggleStarHandler(prev) {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
    console.log(toggle);
  }
  return (
    <div className="pt-[8px] px-4 py-2 bg-[#f9fbfd] ">
      {/* div for logo */}
      <div className="flex justify-between items-center pb-4">
        {/* left hand side */}
        <div className="flex gap-6 items-center">
          <div className="w-[2.7rem] h-[3.5rem]">
            <img src={logo} alt="docs" className="w-full h-full bg-cover" />
          </div>
          <div className="">
            <div className="flex ">
              <input
                type="text"
                name="title"
                placeholder="Untitled Document"
                className="document-input"
              />
              <div>
                <span className="cursor-pointer" onClick={toggleStarHandler}>
                  {toggle ? <GrStarOutline /> : <GrStar />}
                </span>
              </div>
            </div>

            <div className="flex justify-between gap-2" id="navbar-items">
              <p>File</p>
              <p>Edit</p>
              <p>View</p>
              <p>Insert</p>
              <p>Format</p>
              <p>Tools</p>
              <p>Extensions</p>
              <p>Help</p>
            </div>
          </div>
        </div>
        {/* right hand side */}

        <div className="flex justify-between gap-3 items-center">
          <MdOutlineMessage />
          <div className="flex gap-1 items-center">
            <BsCameraVideo />
            <IoMdArrowDropdown />
          </div>
          <div className="flex gap-2 px-4 py-2 bg-blue-400 justify-center items-center rounded-3xl">
            <AiOutlineLock />
            <span>Share</span>
          </div>
        </div>
      </div>

      <TextEditor />
    </div>
  );
};

export default Navbar;
