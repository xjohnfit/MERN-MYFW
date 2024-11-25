import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const rightPass = "Big John";

    const handleLogin = (e) => {
        e.preventDefault();

        if(password === "") {
            setMessage("Please enter a password");
            return;
        }

        if (rightPass === password) {
            setMessage("You're in! Redirecting..." );
            setTimeout(() => {
                navigate("/home");
            }, 2000);
            
        } else {
            setMessage("Wrong password, try again!");
        }

    };


    return (
        <div className="flex justify-center items-center w-[100vw] h-[100vh]">
            <div className="animate-heartbeat h-[300px] w-[300px] bg-red-600 -rotate-[135deg] relative 
            before:content-[''] before:h-[300px] before:w-[300px] before:bg-red-600 before:rounded-full before:absolute before:top-[150px] before:left-0 
            after:content-[''] after:h-[300px] after:w-[300px] after:bg-red-600 after:rounded-full after:absolute after:left-[150px] after:top-0">

            </div>
            <form className="flex flex-col gap-5 h-fit absolute justify-start items-center">
                <h1 className="text-red-900 text-center lovers-quarrel-regular text-6xl">Password required for authentication</h1>
                <div>
                    <input required type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password is my nickname" className="bg-red-200 rounded-md w-fit p-2 text-center outline-none text-red-950" />
                    <h4 className="italic text-xs w-full text-center text-red-300">hint: how's it saved on your phone?</h4>
                </div>
                <button className="bg-red-400 rounded-md text-red-700 font-bold p-2 " onClick={handleLogin}>Let's Go</button>

                <span className="text-white italic text-md">
                    {
                        message? message : ""
                    }
                </span>
            </form>
            
        </div>
    );
};
export default Auth;