import imgone from './img/one.jpg'
import { AiFillMessage, AiOutlineLogout } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import SocialMedia from "./socialMedia.jsx";
function HeaderPage(props) {
    return (
        <>
      <div className="flex w-full flex-row flex-wrap">

          <div className="h-0 w-0 bg-indigo-500 overflow-y-hidden  shadow-lg md:h-screen md:w-1/4 lg:w-1/5 sm:w-full sm:h-full ">{/* This is the main body */}
              <div className="sticky top-0 bg-white p-5"> {/* container for picture */}
                  <img src={imgone} className={"rounded-full border-indigo-400 shadow-lg"} alt=""/>
                  <div className="mt-5 w-full border-t pt-2 text-center text-2xl text-gray-600">Meer Afzal</div> {/* Name Title */}
                  <div className="flex h-screen w-full flex-col hover:cursor-pointer "> {/* for Message */}
                      <a href=""
                         className="w-full border-t-2 bg-gray-200 p-3 text-left text-xl font-semibold text-gray-500 hover:text-gray-300">
                          <AiFillMessage className={"fa fa-comment float-right pr-1 pt-1 text-2xl text-gray-600"}
                                         aria-hidden={true}/>Message
                      </a>
                      <a href=""
                         className="w-full border-t-2 bg-gray-200 p-3 text-left text-xl font-semibold text-gray-500 hover:text-gray-300"> {/* for Setting */}
                          <IoSettings className={"fa fa-comment float-right pr-1 pt-1 text-2xl text-gray-600"}
                                         aria-hidden={true}/>Setting
                      </a>
                      <a href=""
                         className="w-full border-t-2 bg-gray-200 p-3 text-left text-xl font-semibold text-gray-500 hover:text-gray-300">
                          < AiOutlineLogout className={"fa fa-comment float-right pr-1 pt-1 text-2xl text-gray-600"}
                                         aria-hidden={true}/>Log Out
                      </a>
                  </div>
              </div>
          </div>
          <SocialMedia/>
      </div>

        </>
    );
}

export default HeaderPage;