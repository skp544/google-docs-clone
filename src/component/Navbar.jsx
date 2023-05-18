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
  const { title, setTitle } = useState("");

  function toggleStarHandler() {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
    console.log(toggle);
  }

  function titleHandler(e) {
    setTitle(e.target.value);
    console.log(e.target.value);
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
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="title"
                value={title}
                placeholder="Untitled Document"
                className="document-input"
                onChange={titleHandler}
              />
              <div>
                <span className="cursor-pointer" onClick={toggleStarHandler}>
                  {toggle ? <GrStarOutline /> : <GrStar />}
                </span>
              </div>
            </div>

            <div className="flex justify-between gap-2 navbar-items">
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

        <div className="flex justify-between gap-3 items-center text-[20px] pr-5">
          <div id="message" className="cursor-pointer message">
            <MdOutlineMessage />
          </div>
          <div className="video flex gap-1 items-center text-[20px] cursor-pointer">
            <BsCameraVideo />
            <IoMdArrowDropdown />
          </div>
          <div className="flex gap-2 px-4 py-2 bg-blue-300 justify-center items-center rounded-3xl hover:bg-blue-200 cursor-pointer text-[16px]">
            <AiOutlineLock className="cursor-pointer" />
            <span>Share</span>
          </div>
        </div>
      </div>

      <TextEditor />
    </div>
  );
};

export default Navbar;
