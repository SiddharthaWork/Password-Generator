"use client";
import { useState } from "react";
import Count from "./Count";


const Astate = () => {
const [count, setCount] = useState(0);

const onadd = () => {
    setCount( num => num + 1);
}

const remove = () => {
    setCount((num) =>
      num > 100 ? num * 0 : num > 10 ? num * 2 : num > 0 ? num - 1 : 0
);
}

const countarr = [count];

return (
    <div className="w-full h-screen justify-center items-start">
    <div className="space-y-4 flex flex-col w-fit mx-auto">
        <h1 className="text-2xl font-bold">Count is <Count count={countarr} name={"Siddhartha"} age={21}/></h1>
        <button className="bg-white text-black py-2 px-4 rounded-full" onClick={onadd}>
            Add
        </button>

        <button className="bg-white text-black py-2 px-4 rounded-full" onClick={remove}>
            Delete
        </button>

    </div>
    </div>
)
}
export default Astate;
