import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [copied,setcopied] = useState(false)
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  // this is use for the refrence prepose
  const passwordRef = useRef(null)



  const copypasswword = useCallback(()=>{

    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
    setcopied(true)

    setTimeout(() => {
      setcopied(false)
    }, 500);
  },[password])
  

  //use callback is use for the optimize it run funtion and the depancies in which the functtion to make it the optimize
  
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()[]{}"

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed,setPassword])

  // use Effect it is use for the run the function based on the dependinces function is th changing

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed,generatePassword])

  return (
    <div className="w-full h-screen bg-black text-white flex justify-center items-start">
      <div className="bg-gray-600 m-10 p-6 font-serif font-extrabold text-2xl w-3/4 rounded-2xl text-center">

        
        <p className="mb-4">Password Generator</p>

        
        <div className="flex justify-center items-center gap-3 mb-4">
          <input
            type="text"
            className="w-2/3 h-12 bg-white text-black rounded-2xl px-4"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            
            onClick={copypasswword}
            className={`w-40 h-12 transition ${copied ? "bg-green-600" : "bg-amber-600"} rounded-2xl cursor-pointer`}
          >
            {copied? "Copied" : "Copy"}
          </button>
        </div>

        
        <div className="h-14 mt-4 flex items-center justify-center gap-10 text-base font-medium">


          <div className="flex items-center gap-2">
            <input
              type="range"
              min={8}
              max={38}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label>Number</label>
          </div>

          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label>Character</label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
