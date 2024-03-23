import React, {useState} from 'react';

function BodyPage(props) {
    const [result,setResult] = useState("")
    const onSubmit= async (event)=>{
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target)
        formData.append("access_key","aff41ab8-a53c-4fdc-b6f8-00d7d1d6b079");
        const response = await  fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }

    }
    return (
        <>
            <section className="bg-white h-screen mt-10 ">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda at, delectus dolorum error, excepturi facilis fuga fugiat impedit itaque, iure provident quae quasi. Doloremque facilis maiores possimus tempore vitae.</p>
                    <form onSubmit={onSubmit} id={"form"} action="#" className={"space-y-8"}>
                        <div>
                            <label htmlFor="email" className={"block mb-2 text-sm font-medium text-gray-900"}>Your
                                Email</label>
                            <input type="email" id={"email"} name={"email"} placeholder={"name@email.com"}
                                   className={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"}
                                   required/>
                            <label htmlFor="email" className={"block mt-2 mb-2 text-sm font-medium text-gray-900"}>Subject</label>
                            <input type="text" id={"email"} name={"email"} placeholder={"Let us help you"}
                                   className={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"}
                                   required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className={"block mb-2 text-sm font-medium text-gray-900"}>Your Message</label>
                            <textarea className={"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"} name="" id="" placeholder={"Leave Comment"}></textarea>
                            
                        </div>
                        <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-blue-300">Send Message</button>
                    </form>
                    <span>{result}</span>

                </div>

            </section>
        </>
    );
}

export default BodyPage;