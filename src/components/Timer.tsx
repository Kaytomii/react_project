import { useEffect, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setSeconds(prev => (prev < 60 ? prev + 1 : 0));
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, []);

    return <h1>{seconds}</h1>;
}

export default function App() {
    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
            <button onClick={() => setShowTimer(true)}>Start</button>
            <button onClick={() => setShowTimer(false)}>Stop</button>

            {showTimer && <Timer />}
        </div>
    );
}
