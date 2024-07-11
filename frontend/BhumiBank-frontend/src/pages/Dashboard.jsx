import { Appbar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useEffect, useState } from "react";
import axios from "axios"
export function Dashboard(){
    const [balance,setbalance]=useState(0)
    useEffect(()=>{
        const res=axios.get("http://localhost:3000/api/v1/account/balance",{
            headers : { 
                Authorization: `Bearer ${localStorage.getItem("token")}`, 
              }
        }
        ).then((res)=>{
            setbalance(res.data.balance)
        })
        
    },[])
    return(
       
        <div>
            <Appbar></Appbar>
            <Balance amount={balance}></Balance>
            <Users></Users>
        </div>
    )
}