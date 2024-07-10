import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function Signin(){
    return(
        <div className="bg-slate-500 h-screen flex justify-center items-center ">
            <div className="flex flex-col justify-center ">
                <div className="rounded-lg bg-white text-center py-2 px-4 w-80">
                    <Heading label={"Sign in"}></Heading>
                    <SubHeading label={"Enter your Credentials to access your account"}></SubHeading>
                    <InputBox label={"Email"} placeholder={"yashrawat@gmail.com"}></InputBox>
                    <InputBox label={"Password"} placeholder={"Enter your password"}></InputBox>
                    <div className="pt-4">
                        <Button label={"Sign in"}></Button>
                    
                    </div>
                    <BottomWarning label={"Don't have an account."} to={"/signup"} buttontext={"Sign up"}></BottomWarning>
                    

                    


                </div>

            </div>





        </div>
    )
}