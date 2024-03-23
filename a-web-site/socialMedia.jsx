import man from './img/man.jpg'

function SocialMedia(props) {
    return (
        <>
            <div className=" bg-indigo-300 lg:24 h-full w-full overflow-x-scroll p-5 md:w-3/4 md:px-12 lg:w-4/5">
                <div className="w-full rounded-lg bg-white p-5 shadow">
                    <textarea className={"w-full rounded-lg border bg-gray-200 p-2 shadow"} name="" id="" rows="5"
                              placeholder={"Speak your mind"}></textarea>

                    <div className="mt-3 w-full grid grid-cols-2">
                        <div className="col-start-1 col-end-1">
                            <select name="" id="" className="float-left w-full rounded-lg border bg-gray-200 shadow">
                                <option value="">Public</option>
                                <option value="">Private</option>
                            </select>
                        </div>
                        <div className="col-end-1 col-span-1">
                            <button className="float-right rounded-lg bg-indigo-400 p-2 text-white hover:bg-indigo-300" type={"button"}>Submit</button>
                        </div>
                    </div>


                </div>
                <div className="mt-3 flex flex-col">
                    <div className="mt-3 bg-white">
                        <img className={" w-full  rounded-t-lg border shadow-lg"} src={man} alt=""/>

                        <div
                            className="border bg-white p-5 text-xl font-semibold text-gray-600 shadow text-center">Pretty
                            Cool Woman
                        </div>
                        <div className="flex flex-row flex-wrap border bg-white p-1 shadow">
                            <div
                                className="w-1/3 text-center text-xl font-semibold text-gray-700 hover:bg-gray-200">Like
                            </div>
                            <div
                                className="border-l-4 w-1/3 text-center text-xl font-semibold text-gray-700 hover:bg-gray-200">Share
                            </div>
                            <div
                                className="border-l-4 w-1/3 text-center text-xl font-semibold text-gray-700 hover:bg-gray-200">Comments
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-row content-center flex-wrap rounded-b-lg border-4 border-white bg-white p-5 text-xl font-semibold text-gray-700 shadow">
                        <div className="w-full">
                            <div className="w-full text-left text-xl text-gray-700">Meer Afzal</div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus deleniti iste
                            minima ullam? Amet doloremque enim error veniam veritatis.
                        </div>
                    </div>
                </div>
                <div className="mt-3 flex flex-col">
                    <div className="mt-3 bg-white">
                        <img className={" w-full  rounded-t-lg border shadow-lg"} src={man} alt=""/>

                        <div
                            className="border bg-white p-5 text-xl font-semibold text-gray-600 shadow text-center">Pretty
                            Cool Woman
                        </div>
                        <div className="flex flex-row flex-wrap border bg-white p-1 shadow">
                            <div
                                className="w-1/3 text-center text-xl font-semibold text-gray-700 hover:bg-gray-200">Like
                            </div>
                            <div
                                className="border-l-4 w-1/3 text-center text-xl font-semibold text-gray-700 hover:bg-gray-200">Share
                            </div>
                            <div
                                className="border-l-4 w-1/3 text-center text-xl font-semibold text-gray-700 hover:bg-gray-200">Comments
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-row content-center flex-wrap rounded-b-lg border-4 border-white bg-white p-5 text-xl font-semibold text-gray-700 shadow">
                        <div className="w-full">
                            <div className="w-full text-left text-xl text-gray-700">Meer Afzal</div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus deleniti iste
                            minima ullam? Amet doloremque enim error veniam veritatis.
                        </div>
                    </div>
                </div>
                <div className="mt-3 flex flex-col">
                    <div className="mt-3 bg-white">
                        <img className={" w-full  rounded-t-lg border shadow-lg"} src={man} alt=""/>

                        <div
                            className="border bg-white p-5 text-xl font-semibold text-gray-600 shadow text-center">Pretty
                            Cool Woman
                        </div>
                        <div className="flex flex-row flex-wrap border bg-white p-1 shadow">
                            <div
                                className="w-1/3 text-center text-xl font-semibold text-gray-700 hover:bg-gray-200">Like
                            </div>
                            <div
                                className="border-l-4 w-1/3 text-center text-xl font-semibold text-gray-700 hover:bg-gray-200">Share
                            </div>
                            <div
                                className="border-l-4 w-1/3 text-center text-xl font-semibold text-gray-700 hover:bg-gray-200">Comments
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-row content-center flex-wrap rounded-b-lg border-4 border-white bg-white p-5 text-xl font-semibold text-gray-700 shadow">
                        <div className="w-full">
                            <div className="w-full text-left text-xl text-gray-700">Meer Afzal</div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus deleniti iste
                            minima ullam? Amet doloremque enim error veniam veritatis.
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SocialMedia;