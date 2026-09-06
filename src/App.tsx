import axios from "axios";
import { useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
    const whois = async () => {
        await axios.get(API_URL);
    };

    useEffect(() => {
        whois();
    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex relative justify-center">
                <div className="absolute font-bold text-2xl top-5">You Leaked</div>
                <img src="./tusk.jpg" alt="tusk" className="w-md" />
            </div>
        </div>
    );
}

export default App;
