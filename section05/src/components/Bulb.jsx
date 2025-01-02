import {useState} from "react"


const Bulb = () => {
    const [light, setLight] = useState("OFF");

    return (
    <div>
        <div>{light === "ON" ? (
        <h1 style={{background:"orange"}}>ON</h1>
        ) : (
        <h1 style={{background:"gray"}}>OFF</h1>
        )}</div>

        <button onClick={() => {
        setLight(light === "ON" ? "OFF" : "ON");
        }}>{light === "ON" ? "OFF" : "ON"}</button>
    </div>
    );
}

export default Bulb