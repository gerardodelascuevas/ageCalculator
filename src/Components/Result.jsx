import { useContext } from "react"
import MyContext from "../Context"
import './Result.css'

export default function Result(){
    const { value } = useContext(MyContext); 

    return(
        <div className="mt-14">
            { value ?  <div> 
                    <div className="flex mt-3"> <p className="p"> {value.años}  </p> <p className="black">  Years  </p> </div> 
                    <div className="flex mt-3"> <p className="p"> {value.meses}   </p> <p className="black">  Months  </p> </div>
                    <div className="flex mt-3"> <p className="p"> {value.dias}  </p> <p className="black">  Days  </p> </div>
                </div> 
            : null }
        </div>
    )
}