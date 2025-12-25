import React, { useState } from "react";

function Card({ setSelectedColor }) {
  

    const [inputColor ,setInputColor] = useState("")
  function changeColor(color) {
    
    setSelectedColor(color);
  }
    function applyInputColor() {
    setSelectedColor(inputColor);
  }

  return (
    <div className="w-1/3 h-80 bg-amber-100 rounded-3xl p-4">
      
      <div className="h-16 flex justify-center items-center font-serif text-2xl font-bold">
        Background Changer
      </div>

      <p className="text-center text-lg font-light mb-6">
        Select a Quick shade for Background
      </p>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => changeColor("#60a5fa")}
          className={`w-10 h-10 rounded-full bg-blue-400 `}
        ></button>

        <button
          onClick={() => changeColor("#facc15")}
          className={`w-10 h-10 rounded-full bg-yellow-400 `}
        ></button>

        <button
          onClick={() => changeColor("#ffffff")}
          className={`w-10 h-10 rounded-full bg-white border `}
        ></button>

        <button
          onClick={() => changeColor("#000000")}
          className={`w-10 h-10 rounded-full bg-black`}
        ></button>

           <button
          onClick={() => changeColor("#10b981")}
          className={`w-10 h-10 rounded-full bg-emerald-500`}
        ></button>

           <button
          onClick={() => changeColor("#f59e0b")}
          className={`w-10 h-10 rounded-full bg-amber-500`}
        ></button>
      </div>

        <p className="text-center text-lg font-light mb-6 mt-5">
        Enter the Shade
      </p>

       <div className="h-10 flex gap-2 items-center justify-center" >  
        <input type="text" placeholder="#ff0000 or rgb(0,0,0)" className="w-60 h-12 border-2 rounded-2xl border-amber-200 flex items-center justify-center" value={inputColor}  onChange={(e) => setInputColor(e.target.value)}/> 
        <button className="w-25 h-10 bg-amber-400 text-black rounded-3xl"
        onClick={() => changeColor(applyInputColor)}
        >Apply</button>
        

        </div> 

    </div>
  );
}

export default Card;
