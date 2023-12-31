/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { RiCameraLensLine } from "react-icons/ri";
import Uploader from "./Uploader";
function Navbar({ setData, setLoading }) {
  const [text, setText] = useState("");
  const [clicked, setClicked] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "lofi"
  );
  const [openUploader, setOpenUploader] = useState(false);
  const [img, setImg] = useState(null);

  async function getImages() {
    const postData = {
      sites: [
        { url: "https://unsplash.com/s/photos/mammal" },
        { url: "https://unsplash.com/s/photos/animals" },
        { url: "https://unsplash.com/s/photos/cat" },
        { url: "https://unsplash.com/s/photos/dog" },
        { url: "https://unsplash.com/s/photos/savana-animals" },
        { url: "https://unsplash.com/s/photos/farm-animals" },
        { url: "https://unsplash.com/s/photos/anaconda" },
        { url: "https://unsplash.com/s/photos/amazon-animals" },
        { url: "https://unsplash.com/s/photos/amazon-animals" },
        { url: "https://unsplash.com/s/photos/lion" },
        { url: "https://unsplash.com/s/photos/dog" },
        { url: "https://unsplash.com/s/photos/savana-animals" },
        { url: "https://unsplash.com/s/photos/farm-animals" },
        { url: "https://unsplash.com/s/photos/anaconda" },
        { url: "https://unsplash.com/s/photos/amazon-animals" },
        { url: "https://unsplash.com/s/photos/amazon-animals" },
      ],
      search_text: text,
    };

    const response = await fetch("http://127.0.0.1:5000/get_images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    return response.json();
  }

  useEffect(() => {
    setImg(null);
    getImages().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [clicked]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleButton = (e) => {
    if (e.target.checked) {
      setTheme("night");
    } else {
      setTheme("cupcake");
    }
  };

  return (
    <div className=" ">
      {openUploader ? (
        <Uploader
          setOpenUploader={setOpenUploader}
          setData={setData}
          setImg={setImg}
        />
      ) : null}

      <div className="">
        <div className="flex justify-between py-2 px-3  ">
          <div className=" flex justify-center items-center">
            <FaCameraRetro className=" text-3xl mr-2 " />
            <a className=" normal-case text-xl">PADEL</a>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
              <li>
                <label className="swap swap-rotate ">
                  <input type="checkbox" onChange={toggleButton} />
                  <svg
                    className="swap-on fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                  <svg
                    className="swap-off fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 ">
          <input
            type="text"
            placeholder="Search"
            className="input input-primary input-bordered  w-36 md:w-[50%] mr-3"
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setClicked(!clicked);
                setLoading(true);
              }
            }}
          />
          <RiCameraLensLine
            className=" text-3xl mr-2 cursor-pointer transition-all duration-300  hover:scale-90"
            onClick={() => {
              setOpenUploader(true);
            }}
          />
        </div>
        <div className=" pt-4   mx-8">
          {img ? (
            <h2 className=" font-bold text-3xl  my-4 ">Visual search</h2>
          ) : null}

          {img ? (
            <img
              className="w-[200px] h-[200px] object-contain border-4 border-white  "
              src={URL.createObjectURL(img)}
              alt=""
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
