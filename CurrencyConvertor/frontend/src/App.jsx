import { useState } from 'react';
import BackgroundImage from './assets/bg.avif'
import InputBox from "./components/InputBox"
import useCurrencyinfo from "./hooks/useCurrencyinfo"

function App() {
    
    const [amount ,setAmount]= useState(0)
    const [form , setForm] = useState("usd")
    const [to,setTo] = useState("inr")
    const [convertamount ,setConvertamount] = useState(0)


    const currencyInfo = useCurrencyinfo(form)

    const options = Object.keys(currencyInfo)

    const swap = () => {

        setForm(to)
        setTo(form)
        setConvertamount(amount)
        setAmount(convertamount)
    }

    const convert = () => {
        setConvertamount(  Math.round(amount * currencyInfo[to] * 100) / 100);
    }



    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onCurrencyChange={(currency) =>setForm(currency)}
                                selectCurrency={form}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertamount}
                                currencyOption={options}
                                onCurrencyChange={(currency) =>setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                       
                        >
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default App
