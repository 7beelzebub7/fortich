import React from "react";
import SliderInfinito from "../components/SliderInfinito";
import SliderInfinito2 from "../components/SliderInfinito2";
import SliderInfinitoReverso from "../components/SliderInfinitoReverso";

export default function Galeria(){
    return(
        <>
        <SliderInfinito />
        <div className="bg-[#C39A4A] h-2"></div>
        <SliderInfinitoReverso/>
        <div className="bg-[#C39A4A] h-2"></div>
        <SliderInfinito2 />
        </>
    );
}