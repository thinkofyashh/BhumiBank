export function Balance({amount}){
    return(
        <div className="flex justify-start shadow-sm">
            <div className="font-bold px-4 py-2 flex justify-center h-full">Your Balance :</div>
            <div className="font-medium py-2 flex justify-center h-full">Rs {amount} </div>

        </div>
    )

}