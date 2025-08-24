import React, { useRef } from "react";

export default function Otp(){
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();      
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    return(
        <div className="flex justify-center m-1">
            <OtpSubbox reference={ref1} onDone={() =>{
                ref2.current.focus();
            }}/>
            <OtpSubbox reference={ref2} onDone={() =>{
                ref3.current.focus();
            }}/>
            <OtpSubbox reference={ref3} onDone={() =>{
                ref4.current.focus();
            }}/>
            <OtpSubbox reference={ref4} onDone={() =>{
                ref5.current.focus();
            }}/>
            <OtpSubbox reference={ref5} onDone={() =>{
                ref6.current.focus();
            }}/>
            <OtpSubbox reference={ref6} onDone={() =>{
                ref6.current.focus();
            }}/>

        </div>
    )
}

function OtpSubbox({ reference, onDone }) {
    return (
        <div>
            <input type="text" className="m-1 w-[50px] h-[60px] rounded-2xl
            bg-amber-300 outline-none px-4 text-white font-bold"
            ref={reference} onChange={(e) =>{
                onDone()
            }}
            />
        </div>
    )
}