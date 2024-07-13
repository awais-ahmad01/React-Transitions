
import 'animate.css';   //css library provides built in transitions 
import { useState } from 'react';

const Other = () => {
    const [anim,setAnim] = useState(true);

    const handleAnim = () => {
        if(anim){
            return 'animate__backInLeft'
        }
        return 'animate__backOutLeft'
    }

    const toggleAnim = () =>{
        setAnim(!anim)
    }

    return(
        <>
            <h1 
            className={`animate__animated ${handleAnim()}`}>Transition</h1>
            <button
                onClick={toggleAnim}
            >
                Toggle anim
            </button>
        </>
    )
}

export default Other;
