import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export function Signup(){
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate =useNavigate()
    return(
        <>

        <div className="bg-slate-500 h-screen flex justify-center items-center">
            <div className="flex flex-col justify-cente">
                <div className="rounded-lg bg-white h-max text-center p-2 px-4 w-80">
                    <Heading label={"Sign Up"}></Heading>
                    <SubHeading label={"Enter your infromation to create an account"}></SubHeading>
                    <InputBox onChange={(e)=>{setFirstName(e.target.value)}} label={"Firstname"} placeholder={"Yash"}></InputBox>
                    <InputBox onChange={(e)=>{setLastName(e.target.value)}} label={"Lastname"} placeholder={"Rawat"}></InputBox>
                    <InputBox onChange={(e)=>{setEmail(e.target.value)}} label={"Email"} placeholder={"yashrawat@gmail.com"}></InputBox>
                    <InputBox onChange={(e)=>{setPassword(e.target.value)}} label={"Password"} placeholder={"123456"}></InputBox>
                    <div className="pt-4">
                        <Button label={"Sign up"} onClick={async ()=>{
                           const response= await axios.post("http://localhost:3000/api/v1/user/signup",{
                                username:email,
                                firstname:firstName,
                                lastname:lastName,
                                password:password
                            })
                            localStorage.setItem("token",response.data.token)
                            navigate("/dashboard")

                        }}></Button>
                    </div>
                    <BottomWarning label={"Already have an account ?"} buttontext={"Log in"} to={"/signin"}></BottomWarning>

                </div>
            </div>

        </div>
        
        
        </>
    )
}