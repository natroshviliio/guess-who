import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
    const [clicked, setClicked] = useState(false);
    const whois = async () => {
        await axios.get(API_URL);
    };

    void whois;

    useEffect(() => {
        // whois();
    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex relative justify-center">
                <div className="absolute font-bold text-2xl top-5">Here you go!</div>
                <img src="./heyyou.jpg" alt="tusk" className="w-md" />
                <div
                    className={`flex w-full h-50 bg-black z-10 absolute bottom-10 items-center justify-center text-white cursor-pointer ${clicked ? "hidden" : "flex"}`}
                    onClick={() => setClicked(true)}>
                    dont touch it
                </div>
            </div>
        </div>
    );
}

export default App;
