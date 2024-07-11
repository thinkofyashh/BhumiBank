import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function Appbar(){
    const navigate=useNavigate()
    return(
        <div className="rounded-lg shadow-lg  h-14 flex justify-between bg-white">
            <div className="font-bold px-2 py-2 text-red-500 flex flex-col justify-center h-full">
                BhumiBank
                
            </div>
            <div className="flex justify-end">
            <div className="font-medium px-1 py-3 flex flex-col justify-center h-full">
                Hello
            </div>
            <div className="flex px-2 py-2">
            <div  className="rounded-full w-8 h-8 bg-slate-300  flex justify-center items-center h-full  pr-" alt="User Icon">
                <div className="items-center "> U</div>
            </div>
            <Button onClick={(e)=>{
                localStorage.removeItem("token")
                navigate("/signin")

            }} label={"log out"} ></Button>
             
               </div>
            </div>
        </div>
    )
}