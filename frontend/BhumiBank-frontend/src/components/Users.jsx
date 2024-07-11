import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function Users(){
    const [Users,setUser]=useState([])
    const [filter,setFilter]=useState("")
    useEffect( ()=>{
         axios.get("http://localhost:3000/api/v1/user/bulk?filter="+ filter,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`,
            },
         }).then((res)=>{
            setUser(res.data.user)
        })
    },[filter])
    return (
       <div className="justify-start"> 
        <div className="font-bold flex flex-col justify-center px-4 py-4 ">
            Users
        </div>
        <input onChange={(e)=>{
            setFilter(e.target.value)
        }} className="border-gray-400 w-full h-10 rounded-md  shadow-slate-400 shadow-inner px-2" placeholder="Search for user..." type="text"></input>
        <div>
            {Users.map((user)=>{
                if(user){
                    return(
                        <User user={user}></User>
    
                    )
                }else{
                    return null;
                }
                
                
            })}


        </div>


       </div>
    )
}
function User({user}){
    const navigate = useNavigate()
    return(
        <div className="flex justify-between py-4 px-2">
            <div className="flex p-2">
            <div className="rounded-full h-12 w-12 bg-slate-300 flex justify-center ">
                <div className="flex flex-col justify-center">{user.firstname[0]}</div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div className="px-3">
                {user.firstname} {user.lastname}
                </div>

            </div>
            </div>
            <div className="flex flex-col justify-center">
            <Button onClick={(e)=>{navigate("/send?id="+user._id+"&name="+user.firstname)}} label={"Send Money"}></Button>

            </div>

        </div>
    )

}
