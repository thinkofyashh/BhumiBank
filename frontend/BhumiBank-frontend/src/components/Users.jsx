import { useState } from "react"
import { Button } from "./Button"

export function Users(){
    const [Users,setUser]=useState([{
        firstName:"Yash",
        lastname:"Rawat",
        _id:1
    }])
    return (
       <div className="justify-start">
        <div className="font-bold flex flex-col justify-center px-4 py-4 ">
            Users
        </div>
        <input className="border-gray-400 w-full h-10 rounded-md  shadow-slate-400 shadow-inner px-2" placeholder="Search for user..." type="text"></input>
        <div>
            {Users.map((user)=>{
                return(
                    <User user={user}></User>

                )
            })}


        </div>


       </div>
    )
}
function User({user}){
    return(
        <div className="flex justify-between py-4 px-2">
            <div className="flex p-2">
            <div className="rounded-full h-12 w-12 bg-slate-300 flex justify-center ">
                <div className="flex flex-col justify-center">{user.firstName[0]}</div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div className="px-3">
                {user.firstName} {user.lastname}
                </div>

            </div>
            </div>
            <div className="flex flex-col justify-center">
            <Button label={"Send Money"}></Button>

            </div>

        </div>
    )

}