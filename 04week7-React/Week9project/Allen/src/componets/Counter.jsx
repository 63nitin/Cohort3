import React, { useState } from "react";

export default function Counter(){

    const [count, setCount] = useState(0);

    setCount(count+1);
    return <div>
    {count}
    </div>
}