import React, { useState, useRef, useEffect } from "react";

export default function UsePrevHook(){
    const [state, setState] = useState(null);
    const prev = usePrev(state);
    console.log(state, prev)

    return(
        <>
        <p>{state}</p>

        <button onClick={() =>{
            setState((curr) => curr+1);
        }}> Click Me</button>

        <p>The previous value was {prev}</p>
        </>
    )
}


const usePrev = (state) =>{
    const ref = useRef();

    useEffect(() => {
        ref.current = state;
    }, [state]);

    return ref.current;
}