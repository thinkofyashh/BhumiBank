import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function Signup(){
    return(
        <>

        <div className="bg-slate-500 h-screen flex justify-center items-center">
            <div className="flex flex-col justify-cente">
                <div className="rounded-lg bg-white h-max text-center p-2 px-4 w-80">
                    <Heading label={"Sign Up"}></Heading>
                    <SubHeading label={"Enter your infromation to create an account"}></SubHeading>
                    <InputBox label={"Firstname"} placeholder={"Yash"}></InputBox>
                    <InputBox label={"Lastname"} placeholder={"Rawat"}></InputBox>
                    <InputBox label={"Email"} placeholder={"yashrawat@gmail.com"}></InputBox>
                    <InputBox label={"Password"} placeholder={"123456"}></InputBox>
                    <div className="pt-4">
                        <Button label={"Sign up"}></Button>
                    </div>
                    <BottomWarning label={"Already have an account ?"} buttontext={"Log in"} to={"/signin"}></BottomWarning>

                </div>
            </div>

        </div>
        
        
        </>
    )
}