export function InputBox({placeholder,label}){
    return(<div className="py-2">

<div className="font-medium text-black text-sm flex justify-start  pb-2 ">{label}</div>
    <input placeholder={placeholder} className="text-slate-300 rounded-md px-2 py-1 border-slate-400 border-solid border-sky-500 flex justify-center shadow-inner" ></input>


    </div>
    )
}