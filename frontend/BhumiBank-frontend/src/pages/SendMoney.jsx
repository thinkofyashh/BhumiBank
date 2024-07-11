import { useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import axios from "axios"
import { useState } from "react";

export function SendMoney(){
    const [searchparam]=useSearchParams()
    const id=searchparam.get("id")
    const name =searchparam.get("name")
    const [amount,setAmount]=useState(0)
    const navigate=useNavigate()
    return (
        <div className="bg-gray-600 h-screen flex justify-center">
            <div className="h-full flex flex-col justify-center">
                <div className="w-80 flex flex-col justify-center bg-white text-center rounded-lg">
                <div className="pb-14"><Heading label={"Send Money"}></Heading></div>
                <div className="flex">
                    <div className="rounded-full flex flex-col justify-center bg-green-400 w-12 h-12 ml-8">
                        <div className="flex flex-col justify-center">
                            {name[0].toUpperCase()}
                        </div>
                    </div>
                    <div className="font-semibold ml-4 flex flex-col justify-center text-2xl">{name}</div>

                </div>
                <div className="font-medium pt-2 pb-2">
                    <div className="flex justify-start ml-8">
                        Amount (in Rs) :
                    </div>

                </div>
                <div className="ml-8 flex flex-col justify-center">
                <input onChange={(e)=>{setAmount(e.target.value)}}
                        type="number"
                        className="flex h-10 w-64 rounded-md border border-input bg-background  text-sm "
                        id="amount"
                        placeholder=" Enter amount"
                    />
                </div>
                <div className="pt-7 pb-4 ">
                <button onClick={(e)=>{
                    axios.post("http://localhost:3000/api/v1/account/transfer",{
                        to:id,
                        amount:amount
                    },{
                        headers:{
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }

                    }),
                    navigate("/dashboard")

                }} type="button" className=" w-64 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Initiate Transfer</button>
                </div>

                </div>

                
            </div>
        </div>
    )
}