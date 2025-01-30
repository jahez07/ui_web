"use client";
//import { useEffect, useRef } from "react";
import CustomCursor from "../../components/CustomCursor";

export default function Home() {
  //const appRef = useRef(null);
  //const toRef = useRef(null);

  //useEffect(() => {
    //document.addEventListener("mousemove", moveGradient);
    //return function cleanup(){
    //  document.removeEventListener("mousemove", moveGradient);
    //}
  //}, [appRef]);
  return (
    <main className="app" id="app">
      <CustomCursor />
      <div>
        
      </div>
    </main>
  );
}
